import Iproducts from '../interfaces/products.interface';
import productModel from '../models/products.model';

const newProduct = async (product: Iproducts): Promise<Iproducts> => {
  const result = await productModel.create(product);
  return result;
};

export default { newProduct };