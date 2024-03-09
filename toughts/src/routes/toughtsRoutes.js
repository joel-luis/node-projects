const express = require('express')
const toughtsRoutes = express.Router()
const ToughtController = require('../controllers/ToughtController')

toughtsRoutes.get('/', ToughtController.showToughts)

module.exports = toughtsRoutes
