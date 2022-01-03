import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'


import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js'
import { router as tripRouter } from './routes/trips.js'
import { router as stationRouter } from './routes/stations.js'

// connect to MongoDB with mongoose

import('./config/database.js')

// create the express app
const app = express()

// middleware
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'build')))
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// mounted routers
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/trips', tripRouter) // S5
app.use('/stations', stationRouter)

app.get('/*', function (req, res) {
  res.sendFile(
    path.dirname(fileURLToPath(import.meta.url), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
