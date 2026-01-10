if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const path = require('node:path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const recipeRouter = require('./routes/recipe')
const userRouter = require('./routes/user')

const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const User = require('./models/user')

const passport = require('passport')
const LocalStrategy = require('passport-local')

// security imports
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet')


console.log(process.env.GREET)

// mongoose setup
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/recipeApp')
    console.log('Mongoose connected')
}

main().catch((error) => {
    console.log(error)
})
const app = express()
const port = 3000

// set template engine 
app.engine('ejs', ejsMate) //for boilerplate layout
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))
app.use(session({

    secret: 'verysecure',
    name: 'session',
    resave: true,                   // Don't save session if unmodified
    saveUninitialized: true,        // Don't create session until something is stored
    cookie: {                        // Optional: Configure the session cookie
        // secure: true,
        path: '/',                // Set to true if using HTTPS
        httpOnly: true,                // Prevents client-side JS from accessing the cookie
        maxAge: 1000 * 60 * 60 * 24,    // Session expires in 1 day (in milliseconds)
        priority: 'high'
    }
}))
app.use(flash())

// used for register and login user
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    res.locals.loggedInUser = req.user //req.user is added by passport
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

// To remove data using these defaults:
app.use((req, res, next) => {
    Object.defineProperty(req, 'query', {
        value: { ...req.query },           // create a fresh mutable copy
        writable: true,
        configurable: true,
        enumerable: true
    });
    next();
});

app.use(
    mongoSanitize({
        replaceWith: '_',
    }),
);




const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://cdnjs.cloudflare.com/",      // Common for other libs if needed
    "https://cdn.jsdelivr.net/",          // Bootstrap JS/CSS
];
const styleSrcUrls = [
    "https://cdn.jsdelivr.net/",           // This fixes your current error — trailing / is required!
    "https://fonts.googleapis.com/",
    "https://stackpath.bootstrapcdn.com/",   // Keep if you have old links
];
const connectSrcUrls = [
    "https://cdn.jsdelivr.net/",   // Allows source map fetches + any other connects
    "https://stackpath.bootstrapcdn.com/",
];
const fontSrcUrls = [
    "https://fonts.gstatic.com/",
];



app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            // connectSrc: ["'self'", ...connectSrcUrls],
            // scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            scriptSrc: ["'self'", "'unsafe-inline'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            childSrc: ["blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "data:",
                "blob:",
                "https:",
                // Add Cloudinary later: "https://res.cloudinary.com/yourcloudname/"
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
            connectSrc: ["'self'", ...connectSrcUrls],
        },
    })
);

// routes
app.use('/recipe', recipeRouter)
app.use('/user', userRouter)

app.get("/", (req, res) => {
    res.redirect('/recipe')
})

// Catch-all for undefined routes (must be last!)
app.use((req, res, next) => {
    res.status(404).render('notfound')
    // Or send HTML:
    // res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port,
    () => { console.log(`App is running on ${port}`) }
)