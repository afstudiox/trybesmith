import { Router } from 'express';
import productController from '../controller/product.controller';

const productRoutes = Router();

productRoutes.post('/', productController.add);
productRoutes.get('/:id', productController.getOne);
productRoutes.get('/', productController.getAll);

export default productRoutes;