import Iorders from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async (): Promise<Iorders[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';

  const [oders] = await connection.execute(query);

  return oders as Iorders[];
};

export default { getAllOrders };