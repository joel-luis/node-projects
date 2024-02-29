import { Router } from 'express'
import { toughtsRouter } from './toughts.route'
import { authRouter } from './auth.route'

const routes = Router()

routes.use('/toughts', toughtsRouter)
routes.use('/', authRouter)

export default routes
