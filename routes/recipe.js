const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to home page of recipe')
})

module.exports = router