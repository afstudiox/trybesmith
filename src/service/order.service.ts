import orderModel from '../models/order.model';
import { Orders } from '../types';

const orderService = {
  async getAll(): Promise<Orders[]> {
    const result = await orderModel.getAll();
    return result;
  },
};

export default orderService;