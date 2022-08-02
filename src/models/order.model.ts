import { Orders } from '../types';
import connection from './connection';

// https://universodosdados.com/tag/json_arrayagg/#:~:text=Transforma%20Relacional%20em%20JSON%2C%20usando%20Atributos%20Simples%20ou%20com%20Arrays&text=JSON_OBJECT%20transforma%20uma%20coluna%20em,disciplinas%20que%20cada%20um%20cursa.
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