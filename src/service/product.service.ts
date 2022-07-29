import productModel from '../models/product.model';
import { Product } from '../types';

const productService = {
  async getAll(): Promise<Product[]> {
    const result = await productModel.getAll();
    return result;
  },
};

export default productService;