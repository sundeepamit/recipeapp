const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')
const recipeSchemaValidation = require('../utils/recipe-validation')
const ExpressError = require('../utils/ExpressError')
const isLoggedIn = require('../utils/isloggedin')

router.get('/', (req, res) => {
    // console.log(req.session)
    // console.log(req.sessionID)
    // req.session.isLogin = true
    // console.log(req.session)
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
    if (!recipe) {
        req.flash('error', 'Cannot find that recipe')
        return res.redirect('/recipe/show')
    }
    res.render('recipes/detail', { recipe })
})

router.get('/new', isLoggedIn, (req, res) => {
    res.render('recipes/new')
})

router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    res.render('recipes/edit', { recipe })
})

router.post('/new', isLoggedIn, async (req, res) => {
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
    try {
        await recipeSchemaValidation.validate({ title, author, totalTime, image, description, ingredients, steps })
        const recipe = await Recipe.insertOne({ title, author, totalTime, image, description, ingredients, steps })
        req.flash('success', 'successfully created recipe')
        res.redirect(`/recipe/detail/${recipe._id}`)
    } catch (error) {
        new ExpressError(error, 404)
    }

})

router.put('/edit/:id', isLoggedIn, async (req, res) => {
    // Bug :Not a best filter
    const { id } = req.params
    let { title, author, totalTime, image, description, ingredients, steps } = req.body
    if (ingredients) {
        ingredients = ingredients.split(',').map(line => line.trim()).filter(line => line.length > 0)
    }
    if (steps) {
        steps = steps.split('.,').map(line => line.trim()).filter(line => line.length > 0);
    }
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, { title, author, totalTime, image, description, ingredients, steps })
    req.flash('success', 'Update successfully')
    res.redirect(`/recipe/detail/${id}`)
})

router.delete('/detail/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params
    const recipeDeleted = await Recipe.findByIdAndDelete(id)
    console.log(recipeDeleted)
    req.flash('success', 'Successfully deleted recipe')
    res.redirect('/recipe/show')
})

module.exports = router