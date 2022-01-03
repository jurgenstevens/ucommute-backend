import { Router } from 'express'
import * as tripCtrl from '../controllers/trips.js'
const router = Router() // S7

// S8: We're already in the /trips router so don't add another '/trip' to the route.
// GET /trips Retrieve ALL trips
router.get('/', tripCtrl.index)
// S9: Copy and paste of of the routes and comment them out. Then include the actions/functions corresponding with the routes.
// GET trips/:id Retrieve a SINGLE trip

export {
    router
}