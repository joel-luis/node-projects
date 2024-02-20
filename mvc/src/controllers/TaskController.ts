import { Request, Response } from 'express'
import { Task } from '../models/Task'

function createTask(req: Request, res: Response) {
  res.render('tasks/create')
}

async function showTask(req: Request, res: Response) {
  const tasks = await Task.findAll({ raw: true })

  res.render('tasks/all', { tasks })
}

async function createTaskSave(req: Request, res: Response) {
  const { title, description } = req.body

  const task = {
    title,
    description,
    done: false,
  }

  await Task.create(task)
  res.redirect('/tasks')
}

async function updateTask(req: Request, res: Response) {
  const id = req.params.id

  const task = await Task.findOne({ where: { id }, raw: true })

  res.render('tasks/edit', { task })
}

async function updateTaskPost(req: Request, res: Response) {
  const id = req.body.id

  const { title, description } = req.body

  const task = {
    title,
    description,
  }

  await Task.update(task, { where: { id } })
  res.redirect('/tasks')
}

async function toggleTaskStatus(req: Request, res: Response) {
  const id = req.body.id
  const { done } = req.body

  const task = {
    done: done === '0' ? true : false,
  }

  await Task.update(task, { where: { id } })
  res.redirect('/tasks')
}

async function removeTask(req: Request, res: Response) {
  const id = req.body.id

  await Task.destroy({ where: { id } })

  res.redirect('/tasks')
}

export function TaskController() {
  return {
    createTask,
    showTask,
    createTaskSave,
    updateTask,
    updateTaskPost,
    toggleTaskStatus,
    removeTask,
  }
}
