import { Secret, sign } from 'jsonwebtoken';

import userModel from '../models/user.model';
import { AddUser, User } from '../types';

const userService = {
  async add(data: AddUser) {
    const id = await userModel.add(data);
    return id;
  },

  async getOne(id: User['id']): Promise<User> {
    const result = await userModel.getOne(id);
    return result;
  },

  // https://dev.to/vitordelfino/autenticacao-com-jwt-22o7
  // https://stackoverflow.com/questions/66328425/jwt-argument-of-type-string-undefined-is-not-assignable-to-parameter-of-typ
  makeToken: async (payload: string) => { // somente o username esta sendo enviado para gerar o token
    const token = sign(payload, process.env.JWT_SECRET as Secret); 
    return token; // retorna o token 
  },

};

export default userService;