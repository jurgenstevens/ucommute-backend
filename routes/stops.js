import { Router } from 'express'
import * as stopCtrl from '../controllers/stops.js'
const router = Router()
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

/* ------------ Public Routes ------------ */
// GET /trips Retrieve ALL trips
router.get('/', stopCtrl.index)
router.get('/:id', stopCtrl.show)

export {
    router
}