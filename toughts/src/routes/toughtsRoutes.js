const express = require('express')
const toughtsRoutes = express.Router()
const ToughtController = require('../controllers/ToughtController')
const checkAuth = require('../helpers/auth').checkAuth

toughtsRoutes.get('/dashboard', checkAuth, ToughtController.dashboard)
toughtsRoutes.get('/add', checkAuth, ToughtController.createTought)
toughtsRoutes.post('/add', checkAuth, ToughtController.createToughtSave)
toughtsRoutes.get('/', ToughtController.showToughts)

module.exports = toughtsRoutes
