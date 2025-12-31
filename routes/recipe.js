const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('recipes/home')
})

router.get('/show', (req, res) => {
    res.render('recipes/show')
})
module.exports = router