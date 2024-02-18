import { Router } from 'express'
import homeRouter from './home.route'
import usersRouter from './users.route'

const routes = Router()

routes.use('/', homeRouter)
routes.use('/users', usersRouter)

export default routes
