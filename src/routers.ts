import { Router } from 'express';
import productsController from './controller/products.controller';
import usersController from './controller/users.controller';

const routers = Router();

routers.use('/products', productsController);
routers.use('/users', usersController);

export default routers;