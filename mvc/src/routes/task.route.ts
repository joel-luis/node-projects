import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'

const tasksRouter = Router()
const {
  createTask,
  showTask,
  createTaskSave,
  removeTask,
  updateTask,
  updateTaskPost,
} = TaskController()

tasksRouter.get('/', showTask)
tasksRouter.get('/add', createTask)
tasksRouter.get('/edit/:id', updateTask)

tasksRouter.post('/add', createTaskSave)
tasksRouter.post('/edit', updateTaskPost)
tasksRouter.post('/remove', removeTask)

export default tasksRouter
