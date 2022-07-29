import { Router } from 'express';
import productsController from './controller/products.controller';

const routers = Router();

routers.use('/products', productsController);

export default routers;