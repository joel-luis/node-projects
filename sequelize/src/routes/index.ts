import { Router } from 'express'
import homeRouter from './home.route'
import usersRouter from './users.route'
import addressRouter from './address.route'

const routes = Router()

routes.use('/', homeRouter)
routes.use('/users', usersRouter)
routes.use('/address', addressRouter)

export default routes
