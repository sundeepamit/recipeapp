const express = require('express')
const path = require('node:path')
const router = require('./routes/recipe')

const app = express()
const port = 3000

// set template engine 
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

// routes
app.use('/recipe', router)

app.get("/", (req, res) => {
    res.send('Working')
})


app.listen(port,
    () => { console.log(`App is running on ${port}`) }
)