import { Router } from 'express';
import * as authController from '../controllers/auth.controller'
const router = Router();

router.post('/signin', authController.signIn)

export default router;