import { Request, Response, Router } from 'express';
import orderService from '../services/orders.service';

const ordersController = Router();

ordersController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
});

export default ordersController;