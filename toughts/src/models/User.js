const { DataTypes } = require('sequelize')
const db = require('../infra/connect')

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
})

module.exports = User
