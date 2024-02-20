import express from 'express'
import { engine } from 'express-handlebars'

import routes from './routes'
import './infra/connect'

const app = express()
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())
app.use(routes)
app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', 'src/views')

app.listen(3333, () => {
  console.log('Server Started on port 3333 🚀')
})
