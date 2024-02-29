import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'

export const authRouter = Router()

const { login, register, registerPost } = AuthController()

authRouter.get('/login', login)
authRouter.get('/register', register)

authRouter.post('/register', registerPost)
