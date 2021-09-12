const cookieParser = require('cookie-parser')
const express = require('express')
const path = require('path')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const websocketRouter = require('./routes/websocket')

const app = express()

const websocket = require('express-ws')(app)


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/ws', websocketRouter)


module.exports = app;