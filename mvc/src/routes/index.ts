import { Router } from 'express'
import tasksRouter from './task.route'

const routes = Router()

routes.use('/tasks', tasksRouter)

export default routes
