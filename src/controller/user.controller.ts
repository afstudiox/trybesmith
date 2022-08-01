import { Request, Response } from 'express';
import userService from '../service/user.service';

const userController = {
  async add(req: Request, res: Response) { 
    const data = await req.body;
    const id = await userService.add(data);
    const { username } = await userService.getOne(id);
    const token = await userService.makeToken(username); // recebe a string do token
    res.status(201).json({ token }); // retorna um objeto com a chave token com o conteudo do token retornado do service
  },
};

export default userController;