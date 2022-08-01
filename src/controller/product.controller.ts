import { Request, Response } from 'express';
import productService from '../service/product.service';

const productController = {
  async getAll(_req: Request, res: Response) { 
    const result = await productService.getAll();
    res.status(200).json(result);
  },

  async getOne(req: Request, res: Response) { 
    const { id } = await productService.validateParamsId(req.params);
    await productService.exists(id);
    const result = await productService.getOne(Number(id));
    res.status(200).json(result);
  },

  async add(req: Request, res: Response) { 
    const data = await req.body;
    const id = await productService.add(data);
    const result = await productService.getOne(id);
    res.status(201).json(result);
  },
};

export default productController;