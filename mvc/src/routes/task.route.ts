import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'

const tasksRouter = Router()
const { createTask, showTask, createTaskSave, removeTask } = TaskController()

tasksRouter.get('/', showTask)
tasksRouter.get('/add', createTask)
tasksRouter.post('/add', createTaskSave)
tasksRouter.post('/remove', removeTask)

export default tasksRouter
