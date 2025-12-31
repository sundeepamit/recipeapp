const mongoose = require('mongoose')
const { Schema } = mongoose

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true
    },
    author: {
        type: String,
        required: true
    },
    totalTime: {
        type: String,
        required: true,
    },
    image: {
        type: [String],

    }
})

// Model
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
