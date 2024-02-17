import { Router } from 'express'
import { connection } from '../infra/connection'

const booksRouter = Router()

booksRouter.get('/', (req, res) => {
  const sql = 'SELECT * FROM books'

  connection.query(sql, (error, data) => {
    if (error) {
      console.log(error?.message)
    }

    const books = data
    res.render('books', { books })
  })
})

booksRouter.post('/insertbook', (req, res) => {
  const { title, pageqty } = req.body

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${Number(pageqty)}')`
  connection.query(sql, (error) => {
    if (error) {
      console.log(error?.message)
    }
  })
  res.redirect('/books')
})

export default booksRouter
