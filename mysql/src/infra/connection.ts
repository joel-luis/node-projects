import 'dotenv/config'

import mysql from 'mysql'

export const connection = mysql.createConnection({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_SECRET,
})
