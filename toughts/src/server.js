const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const connect = require('./infra/connect')
const path = require('path')
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')
const ToughController = require('./controllers/ToughtController')

const app = express()
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())
app.use(express.static('public'))

app.engine('handlebars', exphbs())
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

app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)
app.get('/', ToughController.showToughts)

connect
  .sync()
  .then(() => {
    app.listen(3333, () => {
      console.log('Server Started on port 3333 🚀')
    })
  })
  .catch((err) => console.log(err))
