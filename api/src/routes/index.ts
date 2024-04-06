import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  res.status(200).json('Ok')
})

routes.post('/create/products', (req: Request, res: Response) => {
  const { name, price } = req.body

  console.log(name, price)
  res.status(201).json(`O produto '${name}' foi criado com sucesso!`)
})

export default routes
