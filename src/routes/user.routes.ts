import { Router } from 'express';
import userController from '../controller/user.controller';

const userRoutes = Router();

userRoutes.post('/', userController.add);

export default userRoutes;