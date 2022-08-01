import express from 'express';
import 'express-async-errors'; // tem que estar depois do express
import errorhandlerMiddleware from './middlewares/error-handles';
import productRoutes from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use(errorhandlerMiddleware);

export default app;
