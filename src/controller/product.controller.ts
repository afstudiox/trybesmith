import { Request, Response } from 'express';
import productService from '../service/product.service';

const productController = {
  async getAll(_req: Request, res: Response) { 
    const result = await productService.getAll();
    res.status(200).json(result);
  },
};

export default productController;