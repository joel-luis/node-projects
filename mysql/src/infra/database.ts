import 'dotenv/config'

import mysql from 'mysql'

export function connect() {
  const connectDatabase = mysql.createConnection({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_SECRET,
  })

  connectDatabase.connect((error) => {
    if (error) {
      console.log(error.message)
    }
    console.log('Connect database success')
  })
}

connect()
