const Joi = require('joi')
const recipeSchemaValidation = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    ingredients: Joi.array().items(Joi.string()).required(),
    author: Joi.string().required(),
    totalTime: Joi.string().required(),
    image: Joi.string().required(),
    steps: Joi.array().items(Joi.string()).required,
})

module.exports = recipeSchemaValidation