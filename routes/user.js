const express = require('express')
const router = express.Router()
const passport = require('passport')

const { login, register, logout, registerUser, loginUser } = require('../controllers/user')

router.get('/login', login).post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/user/login' }), loginUser)

router.get('/register', register).post('/register', registerUser)

router.get('/logout', logout)

module.exports = router