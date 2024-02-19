import { Request, Response, Router, raw } from 'express'
import { User } from '../models/User'
import { Address } from '../models/Address'

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

usersRouter.get('/edit/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const user = await User.findOne({ where: { id }, include: Address })

    res.render('useredit', { user: user?.get({ plain: true }) })
  } catch (error) {
    console.log(error)
  }
})

usersRouter.post('/update', async (req: Request, res: Response) => {
  const { id, name, occupation } = req.body
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  }

  await User.update(userData, { where: { id } })

  res.redirect('/')
})

usersRouter.post('/delete/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  await User.destroy({ where: { id } })

  res.redirect('/')
})

export default usersRouter
