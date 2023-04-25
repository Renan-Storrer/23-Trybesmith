import { Router } from 'express';

import UserController from '../controllers/user.controller';
import LoginMiddleware from '../middlewares/login.middleware';

const router = Router();

const controller = new UserController();

router.use(LoginMiddleware.validate);

router.post('/', controller.login);

export default router;