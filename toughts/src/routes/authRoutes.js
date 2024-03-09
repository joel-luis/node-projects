const express = require('express')
const authRoutes = express.Router()
const AuthController = require('../controllers/AuthController')

authRoutes.get('/login', AuthController.login)
authRoutes.post('/login', AuthController.loginPost)
authRoutes.get('/register', AuthController.register)
authRoutes.post('/register', AuthController.registerPost)

module.exports = authRoutes
