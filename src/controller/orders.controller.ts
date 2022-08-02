import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getOrders = async (req: Request, res: Response): Promise<Response> => {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
};

const createOrders = async (req: Request, res: Response): Promise<Response> => {
  const { save, productsIds } = req.body;
  const userId = save.user.id;
  const newOrder = await orderService.createNewOrders({
    userId,
    productsIds,
  });
  return res.status(201).json(newOrder);
};

export default { getOrders, createOrders };
