import { Request, Response, Router } from 'express';
import productService from '../services/products.service';
import midProducts from '../middlewares/validateProducts';

const productsController = Router();

productsController.post('/', midProducts, async (req: Request, res: Response)
: Promise<Response> => {
  const products = await productService.newProduct(req.body);
  return res.status(201).json(products);
});

productsController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const products = await productService.getProducts();
  return res.status(200).json(products);
});

export default productsController;