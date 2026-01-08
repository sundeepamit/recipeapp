const mongoose = require('mongoose')
const { Schema } = mongoose
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    // username: {
    //     type: String,
    //     required: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true
    // }
})

// this passport will add username and  password filed to our schema
userSchema.plugin(passportLocalMongoose.default)
const User = mongoose.model('User', userSchema)

module.exports = User