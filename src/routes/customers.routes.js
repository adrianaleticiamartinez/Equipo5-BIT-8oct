import { Router } from 'express'
import * as customersController from '../controllers/customers.controller'
import { authJwt } from '../middleware/index'
const router = Router()

router.get('/:customerId', authJwt.verifyToken, customersController.getCustomerById)

export default router