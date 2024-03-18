const express = require('express')
const toughtsRoutes = express.Router()
const ToughtController = require('../controllers/ToughtController')
const checkAuth = require('../helpers/auth').checkAuth

toughtsRoutes.get('/add', checkAuth, ToughtController.createTought)
toughtsRoutes.post('/add', checkAuth, ToughtController.createToughtSave)
toughtsRoutes.get('/dashboard', checkAuth, ToughtController.dashboard)
toughtsRoutes.post('/remove', checkAuth, ToughtController.removeTought)
toughtsRoutes.get('/', ToughtController.showToughts)
toughtsRoutes.get('/edit/:id', checkAuth, ToughtController.updateTought)
toughtsRoutes.post('/edit', checkAuth, ToughtController.updateToughtPost)

module.exports = toughtsRoutes
