const express = require('express')
const path = require('node:path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const router = require('./routes/recipe')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')

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
    resave: true,                   // Don't save session if unmodified
    saveUninitialized: true,        // Don't create session until something is stored
    cookie: {                        // Optional: Configure the session cookie
        secure: false,
        path: '/recipe',                // Set to true if using HTTPS
        httpOnly: true,                // Prevents client-side JS from accessing the cookie
        maxAge: 1000 * 60 * 60 * 24,    // Session expires in 1 day (in milliseconds)
        priority: 'high'
    }
}))
app.use(flash())

app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

// routes
app.use('/recipe', router)

app.get("/", (req, res) => {
    res.send('Working')
})


app.listen(port,
    () => { console.log(`App is running on ${port}`) }
)