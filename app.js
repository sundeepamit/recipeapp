const express = require('express')
const path = require('node:path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const router = require('./routes/recipe')

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

// routes
app.use('/recipe', router)

app.get("/", (req, res) => {
    res.send('Working')
})


app.listen(port,
    () => { console.log(`App is running on ${port}`) }
)