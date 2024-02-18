import { Request, Response, Router } from 'express'
import User from '../models/User'

const usersRouter = Router()

usersRouter.get('/create', (req: Request, res: Response) => {
  res.render('createusers')
})

usersRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  const user = await User.findOne({
    raw: true,
    where: { id },
  })
  res.render('userview', { user })
})

usersRouter.post('/create', async (req: Request, res: Response) => {
  const { name, occupation } = req.body
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }

  await User.create({ name, occupation, newsletter })

  res.redirect('/')
})

export default usersRouter
