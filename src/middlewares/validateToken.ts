import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = 'trybesmith';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  let save;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    save = jwt.verify(token, SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  req.body = { ...req.body, save };

  next();
};

export default validateToken;