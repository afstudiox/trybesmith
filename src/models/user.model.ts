import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AddUser, User } from '../types';
import connection from './connection';

const TABLE = 'Trybesmith.Users';

const userModel = {
  async add(data: AddUser): Promise<number> {
    const { username, classe, level, password } = data;
    const sql = `INSERT INTO ${TABLE}
      (username, classe, level, password)
      VALUES
      (?, ?, ?, ?)`;
    const result = await connection
      .query<ResultSetHeader>(sql, [username, classe, level, password]);
    const [{ insertId }] = result;
    return insertId;
  },

  async getOne(id: User['id']): Promise<User> {
    const sql = `SELECT username, classe, level, password FROM ${TABLE} WHERE id=?`;
    const [[row]] = await connection.query<RowDataPacket[]>(sql, [id]);
    return row as User;
  },

};

export default userModel;