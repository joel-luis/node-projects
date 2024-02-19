import { DataTypes } from 'sequelize'
import db from '../infra/sequelize'
import { User } from './User'

export const Address = db.define('Address', {
  street: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
})

User.hasMany(Address)
Address.belongsTo(User)
