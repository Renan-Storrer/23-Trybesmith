import { Router } from 'express';

import UserController from '../controllers/user.controller';
import UserMiddleware from '../middlewares/user.middlewate';

const router = Router();

const controller = new UserController();

router.use(UserMiddleware.validateUsername);
router.use(UserMiddleware.validateVocation);
router.use(UserMiddleware.validateLevel);
router.use(UserMiddleware.validatePassword);
router.post('/', controller.create);

export default router;