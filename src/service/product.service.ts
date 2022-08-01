import Joi from 'joi';
import NotFoundError from '../errors/not-found.error';
import productModel from '../models/product.model';
import { AddProduct, CreatedProduct, Indexable, Product } from '../types';

const productService = {
  async validateParamsId(unknown: unknown):Promise<Indexable> {
    const schema = Joi.object<Indexable>({
      id: Joi.number().positive().integer().required(),
    }); 
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async getAll(): Promise<Product[]> {
    const result = await productModel.getAll();
    return result;
  },

  async getOne(id: Product['id']): Promise<CreatedProduct> {
    const result = await productModel.getOne(id);
    return result;
  },

  async exists(id: Product['id']): Promise<void> {
    const exists = await productModel.exists(id);
    if (!exists) throw new NotFoundError('"Product" not found.');
  },

  async add(data: AddProduct) {
    const id = await productModel.add(data);
    return id;
  },

};

export default productService;