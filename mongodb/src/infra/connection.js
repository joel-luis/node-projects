require('dotenv').config()
const { MongoClient } = require('mongodb')

const uri = process.env.DATABASE_URI

const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect()
    console.log('Conectando ao MongoDB!')
  } catch (error) {
    console.log(error)
  }
}

run()

module.exports = client
