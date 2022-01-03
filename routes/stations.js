import { Router } from 'express'
import * as stationCtrl from '../controllers/stations.js' // S7
const router = Router()

// S8: We're already in the /trips router so don't add another '/trips' to the route.
// GET /trips Retrieve ALL trips
router.get('/', stationCtrl.index)
// S9: Copy and paste of of the routes and comment them out. Then include the actions/functions corresponding with the routes.
// GET trips/:id Retrieve a SINGLE trip
router.get('/:id', stationCtrl.show)
// POST /trips Add a station
router.post('/', stationCtrl.create)


export {
    router
}