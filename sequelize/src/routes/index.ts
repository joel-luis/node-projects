import { Router } from 'express'
import homeRouter from './home.route'

const routes = Router()

routes.use('/', homeRouter)
// routes.use('/books', booksRouter)

export default routes
