module.exports.checkAuth = function (req, res, next) {
  const userId = req.session.userid

  console.log(req.session)

  if (!userId) {
    res.redirect('/login')
  }

  next()
}
