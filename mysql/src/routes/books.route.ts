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

  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  connection.query(sql, data, (error, data) => {
    if (error) {
      console.log(error?.message)
    }

    const book = data[0]
    res.render('book', { book })
  })
})

booksRouter.get('/edit/:id', (req: Request, res: Response) => {
  const id = req.params.id
  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  connection.query(sql, data, (error, data) => {
    if (error) {
      console.log(error?.message)
    }

    const book = data[0]
    res.render('editbook', { book })
  })
})

booksRouter.post('/insertbook', (req: Request, res: Response) => {
  const { title, pageqty } = req.body

  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
  const data = ['title', 'pageqty', title, pageqty]

  connection.query(sql, data, (error) => {
    if (error) {
      console.log(error?.message)
    }
  })
  res.redirect('/books')
})

booksRouter.post('/updatebook', (req: Request, res: Response) => {
  const { id, title, pageqty } = req.body

  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
  const data = ['title', title, 'pageqty', pageqty, 'id', id]

  connection.query(sql, data, (error) => {
    if (error) {
      console.log(error?.message)
    }
  })
  res.redirect('/books')
})

booksRouter.post('/remove/:id', (req: Request, res: Response) => {
  const id = req.params.id

  const sql = `DELETE FROM books WHERE ?? = ?`
  const data = ['id', id]

  connection.query(sql, data, (error) => {
    if (error) {
      console.log(error?.message)
    }
  })
  res.redirect('/books')
})

export default booksRouter
