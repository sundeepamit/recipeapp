const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')


router.get('/', (req, res) => {
    res.render('recipes/home')
})

router.get('/show', async (req, res) => {
    const recipes = await Recipe.find({})
    // console.log(recipe)
    res.render('recipes/show', { recipes })
})

router.get('/detail/:id', async (req, res) => {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    res.render('recipes/detail', { recipe })
})
module.exports = router