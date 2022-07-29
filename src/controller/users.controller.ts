import { Request, Response, Router } from 'express';
import userService from '../services/users.service';

const usersController = Router();

usersController.post('/', async (req: Request, res: Response): Promise<Response> => {
  const users = await userService.newUser(req.body);
  const token = await userService.generateT(users);
  return res.status(201).json({ token });
});

export default usersController;