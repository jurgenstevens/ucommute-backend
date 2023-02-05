import { Router } from 'express'
import * as stopCtrl from '../controllers/stops.js'
const router = Router()
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

/* ------------ Public Routes ------------ */
// GET /trips Retrieve ALL trips
// localhost:3001/stops
router.use(decodeUserFromToken)
router.get('/', checkAuth, stopCtrl.index)
// localhost:3001/stops/:id
router.get('/:id', checkAuth, stopCtrl.show)

export {
    router
}