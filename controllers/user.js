const User = require('../models/user')

module.exports.login = (req, res) => {
    res.render('recipes/login')
}

module.exports.register = (req, res) => {
    res.render('recipes/register')
}

module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        }
        req.flash('success', 'Log you out')
        res.redirect('/recipe')
    }
    )
}

module.exports.registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const user = new User({ username: username, email: email })
        const registerUser = await User.register(user, password)
        await user.save()
        // after register new user we are login that user
        req.logIn(registerUser, (err) => {
            if (err) { return next(err) }
            req.flash('success', `Successfully register ${username}`)
            res.redirect('/recipe')
        })

    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/user/register')
    }

}

module.exports.loginUser = async (req, res) => {
    const { username } = req.body
    req.flash('success', `Welcome back ${username}`)
    res.redirect('/recipe/show')
}