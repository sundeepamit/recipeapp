const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'you must login')
        return res.redirect('/user/login')
    }
    next()
}

module.exports = isLoggedIn