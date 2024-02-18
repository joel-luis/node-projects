import { Request, Response, Router } from 'express'
import User from '../models/User'

const homeRouter = Router()

homeRouter.get('/', async (req: Request, res: Response) => {
  const users = await User.findAll({ raw: true })
  console.log(users)

  res.render('home', { users })
})

export default homeRouter
