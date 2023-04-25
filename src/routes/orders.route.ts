import { Router } from 'express';

import OrderController from '../controllers/orders.controller';

const router = Router();
const controller = new OrderController();

router.get('/', controller.findAll);

export default router;
