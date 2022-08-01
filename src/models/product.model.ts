import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AddProduct, CreatedProduct, Product } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Products';

const productModel = {
  async getAll(): Promise<Product[]> {
    const sql = `SELECT id, name, amount, orderId FROM ${TABLE}`;
    const [rows] = await connection.query(sql);
    return rows as Product[];
  },

  async getOne(id: Product['id']): Promise<CreatedProduct> {
    const sql = `SELECT id, name, amount FROM ${TABLE} WHERE id=?`;
    const [[row]] = await connection.query<RowDataPacket[]>(sql, [id]);
    return row as Product;
  },

  async exists(id: Product['id']): Promise<boolean> {
    const sql = `SELECT 1 FROM ${TABLE} WHERE id=?`;
    const [[row]] = await connection.query<RowDataPacket[]>(sql, [id]);
    return !!row;
  },

  async add(data: AddProduct): Promise<number> {
    const { name, amount, orderId } = data;
    const sql = `INSERT INTO ${TABLE}
      (name, amount, orderId)
      VALUES
      (?, ?, ?)`;
    const result = await connection.query<ResultSetHeader>(sql, [name, amount, orderId]);
    const [{ insertId }] = result;
    return insertId;
  },
};

export default productModel;