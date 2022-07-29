import express from 'express';
import productRoutes from './routes/product.routes';

const app = express();

app.use('/products', productRoutes);

app.use(express.json());

export default app;
