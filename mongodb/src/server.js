const express = require('express')
const exphbs = require('express-handlebars')
const productsRoutes = require('./routes/productsRoutes')

const app = express()
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', 'src/views')

app.use(express.json())
app.use(express.static('public'))
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use('/', productsRoutes)

app.listen(3000, () => {
  console.log('Server Started on port 3000 🚀')
})
