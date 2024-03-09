const { DataTypes } = require('sequelize')
const db = require('../infra/connect')
const User = require('../models/User')

const Tought = db.define('Tought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought
