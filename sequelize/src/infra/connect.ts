import sequelize from './sequelize'

function connect() {
  try {
    sequelize.sync()
  } catch (error) {
    console.log('Não foi possível conectar', error)
  }
}

connect()
