import { DataTypes } from 'sequelize'
import db from '../infra/sequelize'
import { User } from './User'

export const Tought = db.define('Tought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Tought.belongsTo(User)
User.hasMany(Tought)
