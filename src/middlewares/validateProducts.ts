import { NextFunction, Request, Response } from 'express';
import Joi from 'joi'; 

const midProducts = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  try {
    const schema = Joi.object({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    await schema.validateAsync(req.body);
    next();
  } catch (e) {
    if ((e as Error).message === '"amount" is required' 
    || (e as Error).message === '"name" is required') {
      res.status(400).json({ message: (e as Error).message });
    } else {
      res.status(422).json({ message: (e as Error).message });
    }
  }
};

export default midProducts;