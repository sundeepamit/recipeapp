const express = require('express')
const router = express.Router()
const isLoggedIn = require('../utils/isloggedin')
const { home, show, detail, newRecipe, edit, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipe')

router.get('/', home)

router.get('/show', show)

router.get('/detail/:id', detail)

router.get('/new', isLoggedIn, newRecipe)

router.get('/edit/:id', isLoggedIn, edit)

router.post('/new', isLoggedIn, createRecipe)

router.put('/edit/:id', isLoggedIn, updateRecipe)

router.delete('/detail/:id', isLoggedIn, deleteRecipe)

module.exports = router