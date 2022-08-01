import { NextFunction, Request, Response } from 'express';
import Joi from 'joi'; 

const midUsersTypes = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  try {
    const schema = Joi.object({
      username: Joi.string().min(3),
      classe: Joi.string().min(3),
      level: Joi.number().greater((1)),
      password: Joi.string().min(8),
    }).messages({
      'number.greater': '{{#label}} must be greater than or equal to 1',
    });
    await schema.validateAsync(req.body);
    next();
  } catch (e) {
    res.status(422).json({ message: (e as Error).message });
  }
};

const midUsersRequired = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  try {
    const schema = Joi.object({
      username: Joi.required(),
      classe: Joi.required(),
      level: Joi.required(),
      password: Joi.required(),
    });
    await schema.validateAsync(req.body);
    next();
  } catch (e) {
    res.status(400).json({ message: (e as Error).message });
  }
};

export default { midUsersTypes, midUsersRequired };