import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import { router as tripRouter } from './routes/trips.js'
import { router as stationRouter } from './routes/stations.js'
import { router as stopRouter } from './routes/stops.js'

// connect to MongoDB with mongoose

import('./config/database.js')

// create the express app
const app = express()

// middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// mounted routers
app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/trips', tripRouter)
app.use('/stations', stationRouter)
app.use('/api/stops', stopRouter)


app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }