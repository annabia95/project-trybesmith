import { Request, Response, Router } from 'express';
import productService from '../services/products.service';

const productsController = Router();

productsController.post('/', async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.newProduct(req.body);
  return res.status(201).json(products);
});

export default productsController;