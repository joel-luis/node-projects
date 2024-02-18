import { DataTypes } from 'sequelize'
import db from '../infra/sequelize'

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
})

export default User
