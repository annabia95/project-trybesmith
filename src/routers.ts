import { Router } from 'express';
import productsController from './controller/products.controller';
import usersController from './controller/users.controller';
import ordersController from './controller/orders.controller';
import midProducts from './middlewares/validateProducts';

const routers = Router();

routers.use('/products', midProducts, productsController);
routers.use('/users', usersController);
routers.use('/orders', ordersController);

export default routers;