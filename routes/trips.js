import { Router } from 'express'
import * as tripCtrl from '../controllers/trips.js'
const router = Router() // S7
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

// S8: We're already in the /trips router so don't add another '/trip' to the route.
router.use(decodeUserFromToken)
// GET /trips Retrieve ALL trips
router.get('/', checkAuth, tripCtrl.index)
// S9: Copy and paste of of the routes and comment them out. Then include the actions/functions corresponding with the routes.
// GET trips/:id Retrieve a SINGLE trip
router.get('/:id', tripCtrl.show)
// POST /trips Add a trip
router.post('/', checkAuth, tripCtrl.create)
// PUT /trips/:id Update a trip
router.put('/:id', tripCtrl.update)
// DELETE /trips/:id Delete a trip
router.delete('/:id', tripCtrl.delete)


export {
    router
}