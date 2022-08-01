import { Request, Response, Router } from 'express';
import validateToken from '../middlewares/validateToken';
import orderService from '../services/orders.service';
import midOrders from '../middlewares/validateOrders';

const ordersController = Router();

ordersController.get(
  '/',
  async (req: Request, res: Response): Promise<Response> => {
    const orders = await orderService.getOrders();
    return res.status(200).json(orders);
  },
);

ordersController.post('/', validateToken, midOrders, async (req: Request, res: Response) => {
  const { save, productsIds } = req.body;
  const { userId } = save;
  const newOrder = await orderService.createNewOrders({
    userId,
    productsIds,
  });
  res.status(201).json(newOrder);
});

export default ordersController;
