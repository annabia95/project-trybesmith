import Iusers from '../interfaces/users.interface';
import userModel from '../models/users.model';

const newUser = async (user: Iusers): Promise<Iusers> => {
  const result = await userModel.createUsers(user);
  return result;
};

const generateT = async (user: Iusers): Promise<string> => {
  const token = await userModel.generateJWTToken(user);
  return token;
};

export default { newUser, generateT };