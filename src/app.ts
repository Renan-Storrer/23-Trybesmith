import express from 'express';

import ProductRouter from './routes/product.route';
import UserRouter from './routes/user.route';
import OrdersRouter from './routes/orders.route';
import LoginRouter from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrdersRouter);
app.use('/login', LoginRouter);

export default app;
