import { ResultSetHeader } from 'mysql2';
import Iorders from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async (): Promise<Iorders[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';

  const [oders] = await connection.execute(query);

  return oders as Iorders[];
};

const createOrders = async (orders: Iorders): Promise<Iorders> => {
  const { userId, productsIds } = orders;
  const q1 = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const v1 = [userId];
  const q2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE (id = ?)';

  const resultUser = await connection.execute<ResultSetHeader>(q1, v1);

  const [dataInserted] = resultUser;
  const { insertId } = dataInserted;

  await connection.execute<ResultSetHeader>(q2, [insertId, ...productsIds]);
  return { userId, productsIds };
};

export default { getAllOrders, createOrders };
