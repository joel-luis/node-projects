import express from 'express'
import { engine } from 'express-handlebars'
import './infra/database'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3333, () => {
  console.log('Server Started on port 3333 🚀')
})
