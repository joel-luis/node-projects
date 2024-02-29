import { Request, Response } from 'express'

async function showToughts(req: Request, res: Response) {
  res.render('toughts/home')
}

export function ToughtsController() {
  return {
    showToughts,
  }
}
