import { connection } from './connection'

function database() {
  connection.connect((error) => {
    if (error) {
      console.log(error.message)
    }
    console.log('Connect database success')
  })
}

database()
