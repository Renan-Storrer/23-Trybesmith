import { Router } from 'express';

import ProductController from '../controllers/product.controller';
import ProductMiddleware from '../middlewares/product.middleware';

const router = Router();

const controller = new ProductController();

router.get('/', controller.findAll);

router.use(ProductMiddleware.validateAmount);
router.use(ProductMiddleware.validateName);
router.post('/', controller.create);

export default router;