import Iproducts from '../interfaces/products.interface';
import productModel from '../models/products.model';

const newProduct = async (product: Iproducts): Promise<Iproducts> => {
  const result = await productModel.create(product);
  return result;
};

const getProducts = async (): Promise<Iproducts[]> => {
  const result = await productModel.getAllProducts();
  return result;
};

export default { newProduct, getProducts };