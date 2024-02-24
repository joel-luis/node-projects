import './infra/connect'
import express from 'express'
import session from 'express-session'
import flash from 'express-flash'
import { engine } from 'express-handlebars'
import path from 'path'

import routes from './routes'

import './models/Toughts'
import './models/User'

const app = express()
app.use(
  express.urlencoded({
    extended: true,
  }),
)

const FileStore = require('session-file-store')(session)

app.use(express.json())
app.use(routes)
app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', 'src/views')

app.use(
  session({
    name: 'session',
    secret: 'secret_session',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: path.join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  }),
)

app.use(flash())

app.use((req, res, next) => {
  if (req.session.id) {
    res.locals.session = req.session
  }
  next()
})

app.listen(3333, () => {
  console.log('Server Started on port 3333 🚀')
})
