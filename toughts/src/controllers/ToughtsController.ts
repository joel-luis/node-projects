import { Request, Response } from 'express'
import { Tought } from '../models/Toughts'
import { User } from '../models/User'

async function showToughts(req: Request, res: Response) {
  res.render('toughts/home')
}

export function ToughtsController() {
  return {
    showToughts,
  }
}
