import { Router } from 'express'
import { toughtsRouter } from './toughts.route'

const routes = Router()

routes.use('/toughts', toughtsRouter)

export default routes
