import { Orders } from '../types';
import connection from './connection';

const orderModel = {
  async getAll(): Promise<Orders[]> {
    const sql = `
    SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products
    ON orders.id = products.orderId
    GROUP BY orders.id
    ORDER BY orders.userId
    `;
    const [rows] = await connection.query(sql);
    return rows as Orders[];
  },
};

export default orderModel;