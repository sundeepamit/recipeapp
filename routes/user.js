const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')

router.get('/login', (req, res) => {
    res.render('recipes/login')
})

router.get('/register', (req, res) => {
    res.render('recipes/register')
})

router.get('/logout', (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        }
        req.flash('success', 'Log you out')
        res.redirect('/recipe')
    }
    )
})

router.post('/register', async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const user = new User({ username: username, email: email })
        const registerUser = await User.register(user, password)
        await user.save()
        req.logIn(registerUser, (err) => {
            if (err) { return next(err) }
            req.flash('success', `Successfully register ${username}`)
            res.redirect('/recipe')
        })

    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/user/register')
    }

})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/user/login' }), async (req, res) => {
    const { username } = req.body
    req.flash('success', `Welcome back ${username}`)
    res.redirect('/recipe/show')
})
module.exports = router