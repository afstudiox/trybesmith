import { Request, Response } from 'express';
import orderService from '../service/order.service';

const orderController = {
  async getAll(_req: Request, res: Response) {
    const result = await orderService.getAll();
    res.status(200).json(result);
  },
};

export default orderController;