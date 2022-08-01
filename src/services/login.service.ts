import jwt from 'jsonwebtoken';
import Iusers from '../interfaces/users.interface';
import checkLogin from '../models/login.model';

const SECRET = 'trybesmith';

const generateJWTToken = async (user: Iusers): Promise<string> => {
  const oldUser = await checkLogin(user);

  if (oldUser) {
    const jwtConfig = {
      expiresIn: '8d',
      algorithm: 'HS256',
    } as jwt.SignOptions;
    const token = jwt.sign({ user: oldUser }, SECRET, jwtConfig);
    return token;
  }
  return oldUser;
};

export default generateJWTToken;
