import { Request, Response, Router } from 'express'
import { Address } from '../models/Address'

const addressRouter = Router()

addressRouter.post('/create', async (req: Request, res: Response) => {
  const { UserId, street, number, city } = req.body

  const address = {
    UserId,
    street,
    number,
    city,
  }

  await Address.create(address)
  res.redirect(`/users/edit/${UserId}`)
})

addressRouter.post('/delete', async (req: Request, res: Response) => {
  const { id } = req.body
  const { UserId } = req.body

  await Address.destroy({
    where: { id },
  })

  res.redirect(`/users/edit/${UserId}`)
})

export default addressRouter
