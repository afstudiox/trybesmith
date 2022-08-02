import { Router } from 'express';
import orderController from '../controller/order.controller';

const orderRoutes = Router();

orderRoutes.get('/', orderController.getAll);

export default orderRoutes;