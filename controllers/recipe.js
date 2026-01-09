const Recipe = require('../models/recipe')
const ExpressError = require('../utils/ExpressError')
const recipeSchemaValidation = require('../utils/recipe-validation')

module.exports.home = (req, res) => {
    res.render('recipes/home')
}

module.exports.show = async (req, res) => {
    const recipes = await Recipe.find({})
    // console.log(recipe)
    res.render('recipes/show', { recipes })
}

module.exports.detail = async (req, res) => {
    const { id } = req.params
    const recipe = await Recipe.findById(id).populate('owner')
    // console.log(recipe)
    if (!recipe) {
        req.flash('error', 'Cannot find that recipe')
        return res.redirect('/recipe/show')
    }
    res.render('recipes/detail', { recipe })
}

module.exports.newRecipe = (req, res) => {
    res.render('recipes/new')
}

module.exports.edit = async (req, res) => {
    const { id } = req.params
    const foundRecipe = await Recipe.findById(id)
    if (!foundRecipe.owner._id.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to edit this.')
        return res.redirect('/recipe/show')
    }
    const recipe = await Recipe.findById(id)
    res.render('recipes/edit', { recipe })
}

module.exports.createRecipe = async (req, res) => {
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
        recipeSchemaValidation.validate({ title, author, totalTime, image, description, ingredients, steps })
        const recipe = new Recipe({ title, author, totalTime, image, description, ingredients, steps })
        recipe.owner = req.user._id
        await recipe.save()
        req.flash('success', 'successfully created recipe')
        res.redirect(`/recipe/detail/${recipe._id}`)
    } catch (error) {
        new ExpressError(error, 404)
    }

}

module.exports.updateRecipe = async (req, res) => {
    // Bug :Not a best filter
    const { id } = req.params
    let { title, author, totalTime, image, description, ingredients, steps } = req.body
    if (ingredients) {
        ingredients = ingredients.split(',').map(line => line.trim()).filter(line => line.length > 0)
    }
    if (steps) {
        steps = steps.split('.,').map(line => line.trim()).filter(line => line.length > 0);
    }
    const foundRecipe = await Recipe.findById(id)
    if (!foundRecipe.owner._id.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to edit this.')
        return res.redirect('/recipe/show')
    }
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, { title, author, totalTime, image, description, ingredients, steps })
    req.flash('success', 'Update successfully')
    res.redirect(`/recipe/detail/${id}`)
}

module.exports.deleteRecipe = async (req, res) => {
    const { id } = req.params
    const foundRecipe = await Recipe.findById(id)
    if (!foundRecipe.owner._id.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to edit this.')
        return res.redirect('/recipe/show')
    }
    const recipeDeleted = await Recipe.findByIdAndDelete(id)
    console.log(recipeDeleted)
    req.flash('success', 'Successfully deleted recipe')
    res.redirect('/recipe/show')
}