const conn = require('../infra/connection')
const { ObjectId } = require('mongodb')

class Product {
  constructor(name, image, price, description) {
    this.name = name
    this.image = image
    this.price = price
    this.description = description
  }

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    })

    return product
  }

  static async getProducts() {
    const products = conn.db().collection('products').find().toArray()
    return products
  }

  static async getProductById(id) {
    const product = await conn.db().collection('products').findOne({ _id: id })

    return product
  }

  static async removeProductById(id) {
    await conn.db().collection('products').deleteOne({ _id: id })
  }
}

module.exports = Product
