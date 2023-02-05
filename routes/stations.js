import { Router } from 'express'
import * as stationCtrl from '../controllers/stations.js' // S7
const router = Router()

// We're already in the /stations router so don't add another '/stations' to the route.
// GET /stations Retrieve ALL stations
router.use(decodeUserFromToken)
router.get('/', checkAuth, stationCtrl.index)
// S9: Copy and paste of of the routes and comment them out. Then include the actions/functions corresponding with the routes.
// GET stations/:id Retrieve a SINGLE trip
router.get('/:id', checkAuth, stationCtrl.show)
// POST /stations Add a station
router.post('/', checkAuth, stationCtrl.create)
// PUT /stations/:id Update a station
router.put('/:id', checkAuth, stationCtrl.update)
// DELETE /stations/:id Delete a station
router.delete('/:id', checkAuth, stationCtrl.delete)

// GET /stores/:storeId/products/:productId Retrieve ALL products


export {
    router
}