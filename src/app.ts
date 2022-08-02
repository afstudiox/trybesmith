import 'express-async-errors'; // tem que estar depois do express
import express from 'express';
import errorhandlerMiddleware from './middlewares/error-handles';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';

const app = express();

app.use(express.json());

app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.use(errorhandlerMiddleware);

export default app;
