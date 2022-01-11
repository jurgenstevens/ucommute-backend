import { Router } from 'express'
import * as usersCtrl from '../controllers/profile.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, usersCtrl.index)

export { router }