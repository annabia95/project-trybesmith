import { Router } from 'express';
import productsController from './controller/products.controller';
import usersController from './controller/users.controller';
import ordersController from './controller/orders.controller';
import loginController from './controller/login.controller';
import validateToken from './middlewares/validateToken';
import midOrders from './middlewares/validateOrders';

const routers = Router();

routers.use('/products', productsController);
routers.use('/users', usersController);
routers.get('/orders', ordersController.getOrders);
routers.use('/login', loginController);

routers.post('/orders', validateToken, midOrders, ordersController.createOrders);

export default routers;