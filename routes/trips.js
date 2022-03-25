import { Router } from 'express'
import * as tripCtrl from '../controllers/trips.js'
const router = Router()
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

/* ------------ Public Routes ------------ */
// GET /trips Retrieve ALL trips
router.get('/', tripCtrl.index)

// We're already in the /trips router so don't add another '/trip' to the route.
router.use(decodeUserFromToken)
// Copy and paste of of the routes and comment them out. Then include the actions/functions corresponding with the routes.
// POST /trips Add a trip
router.post('/', checkAuth, tripCtrl.create)
// GET trips/:id Retrieve a SINGLE trip
router.get('/:id', checkAuth, tripCtrl.show)
// PUT /trips/:id Update a trip
router.put('/:id', checkAuth, tripCtrl.update)
// DELETE /trips/:id Delete a trip
router.delete('/:id', checkAuth, tripCtrl.delete)


export {
    router
}