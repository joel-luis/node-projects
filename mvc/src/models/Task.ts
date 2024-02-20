import { DataTypes } from 'sequelize'
import db from '../infra/sequelize'

export const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
})
