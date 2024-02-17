import { Request, Response, Router } from 'express'
import { connection } from '../infra/connection'

const booksRouter = Router()

booksRouter.get('/', (req: Request, res: Response) => {
  const sql = 'SELECT * FROM books'

  connection.query(sql, (error, data) => {
    if (error) {
      console.log(error?.message)
    }

    const books = data
    res.render('books', { books })
  })
})

booksRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id

  const sql = `SELECT * FROM books WHERE id = ${id}`
  connection.query(sql, (error, data) => {
    if (error) {
      console.log(error?.message)
    }

    const book = data[0]
    res.render('book', { book })
  })
})

booksRouter.post('/insertbook', (req: Request, res: Response) => {
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
