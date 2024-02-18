import 'dotenv/config'

import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_SECRET,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  },
)

export default sequelize
