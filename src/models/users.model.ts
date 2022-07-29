import { ResultSetHeader } from 'mysql2';
import jwt from 'jsonwebtoken';
import Iusers from '../interfaces/users.interface';
import connection from './connection';

const SECRET = 'trybesmith';

const createUsers = async (users: Iusers): Promise<Iusers> => {
  const { username, classe, level, password } = users;

  const q = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)';
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(q, values);
  const { insertId: id } = result;

  const newwUser: Iusers = { id, username, classe, level, password };
  return newwUser;
};

const generateJWTToken = async (user: Iusers): Promise<string> => {
  const { username, classe, level } = user;
  const newUser = {
    username,
    classe,
    level,
  };

  const jwtConfig = {
    expiresIn: '8d',
    algorithm: 'HS256',
  } as jwt.SignOptions;

  const token = jwt.sign({ user: newUser }, SECRET, jwtConfig);

  return token;
};

export default { createUsers, generateJWTToken };