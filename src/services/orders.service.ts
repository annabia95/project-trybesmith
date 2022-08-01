import Iorders from '../interfaces/orders.interface';
import productModel from '../models/products.model';
import orderModel from '../models/orders.model';

const getOrders = async (): Promise<Iorders[]> => {
  const order = await orderModel.getAllOrders();
  const products = await productModel.getAllProducts();

  const result = order.map(({ id, userId }) => ({
    id,
    userId,
    productsIds: products.filter((product) => id === product.orderId).map((elem) => elem.id),
  }));

  return result as Iorders[];
};

const createNewOrders = async (orders: Iorders): Promise<Iorders> => {
  const newOrder = await orderModel.createOrders(orders);
  return newOrder;
};

export default { getOrders, createNewOrders };