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

router.get('/new', (req, res) => {
    res.render('recipes/new')
})

router.post('/new', async (req, res) => {
    let { title, author, totalTime, image, description, ingredients, steps } = req.body
    if (ingredients) {
        ingredients = ingredients
            .split('\n')                    // split by lines
            .map(line => line.trim())       // remove useless spaces
            .filter(line => line.length > 0); // remove empty lines
    }

    if (steps) {
        steps = steps
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);
    }
    const recipe = await Recipe.insertOne({ title, author, totalTime, image, description, ingredients, steps })

    res.redirect(`/recipe/detail/${recipe._id}`)
})
module.exports = router