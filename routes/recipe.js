const express = require('express')
const router = express.Router()
const isLoggedIn = require('../utils/isloggedin')
const { home, show, detail, newRecipe, edit, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipe')

router.get('/', home)

router.get('/show', show)

router.get('/detail/:id', detail)
    .delete('/detail/:id', isLoggedIn, deleteRecipe)

router.get('/new', isLoggedIn, newRecipe)
    .post('/new', isLoggedIn, createRecipe)

router.get('/edit/:id', isLoggedIn, edit)
    .put('/edit/:id', isLoggedIn, updateRecipe)

module.exports = router