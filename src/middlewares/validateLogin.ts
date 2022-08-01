import { NextFunction, Request, Response } from 'express';
import Joi from 'joi'; 

const midLoginRequired = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  try {
    const schema = Joi.object({
      username: Joi.required(),
      password: Joi.required(),
    });
    await schema.validateAsync(req.body);
    next();
  } catch (e) {
    res.status(400).json({ message: (e as Error).message });
  }
};

export default midLoginRequired;