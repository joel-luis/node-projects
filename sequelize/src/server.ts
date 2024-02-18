import express from 'express'
import { engine } from 'express-handlebars'

import routes from './routes'
import './infra/connect'
import './models/User'

const app = express()
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
app.use(routes)

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', 'src/views')

app.use(express.static('public'))

app.listen(3333, () => {
  console.log('Server Started on port 3333 🚀')
})
