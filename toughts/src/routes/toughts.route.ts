import { Router } from 'express'
import { ToughtsController } from '../controllers/ToughtsController'

export const toughtsRouter = Router()

const { showToughts } = ToughtsController()

toughtsRouter.get('/', showToughts)
