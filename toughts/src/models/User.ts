import { DataTypes } from 'sequelize'
import db from '../infra/sequelize'

export const User = db.define('User', {
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
