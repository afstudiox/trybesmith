import { Product } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Products';

const productModel = {
  async getAll(): Promise<Product[]> {
    const sql = `SELECT id, name, amount, orderId FROM ${TABLE}`;
    const [rows] = await connection.query(sql);
    return rows as Product[];
  },
};

export default productModel;