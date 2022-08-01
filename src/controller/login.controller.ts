import { Request, Response, Router } from 'express';
import midLoginRequired from '../middlewares/validateLogin';
import generateJWTToken from '../services/login.service';

const loginController = Router();

loginController.post('/', midLoginRequired, async (
  req: Request, 
  res: Response,
)
: Promise<Response> => {
  const token = await generateJWTToken(req.body);
  if (!token) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(200).json({ token });
});

export default loginController;