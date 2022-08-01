import { Router } from 'express';
import productsController from './controller/products.controller';
import usersController from './controller/users.controller';
import ordersController from './controller/orders.controller';
import loginController from './controller/login.controller';

const routers = Router();

routers.use('/products', productsController);
routers.use('/users', usersController);
routers.use('/orders', ordersController);
routers.use('/login', loginController);

export default routers;