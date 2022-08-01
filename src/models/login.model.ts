import { RowDataPacket } from 'mysql2';
import Iusers from '../interfaces/users.interface';
import connection from './connection';

const checkLogin = async (users: Iusers): Promise<Iusers> => {
  const { username, password } = users;

  const q = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const values = [username, password];

  const [result] = await connection.execute<RowDataPacket[]>(q, values);

  return result[0] as Iusers;
};

export default checkLogin;
