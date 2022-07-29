import { ResultSetHeader } from 'mysql2';
import Iproducts from '../interfaces/products.interface';
import connection from './connection';

const create = async (product: Iproducts): Promise<Iproducts> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Iproducts = { id, name, amount };
  return newProduct;
};
const getAllProducts = async (): Promise<Iproducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [product] = await connection.execute(query);

  return product as Iproducts[];
};

export default { create, getAllProducts };