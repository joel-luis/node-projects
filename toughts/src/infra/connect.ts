import sequelize from './sequelize'

function connect() {
  try {
    sequelize.authenticate()
  } catch (error) {
    console.log('Não foi possível conectar', error)
  }
}

connect()
