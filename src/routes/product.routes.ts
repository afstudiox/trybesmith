import { Router } from 'express';
import productController from '../controller/product.controller';

const productRoutes = Router();

productRoutes.get('/', productController.getAll);

export default productRoutes;