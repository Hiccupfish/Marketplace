import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import productsRouter from './routes/products';
import servicesRouter from './routes/services';
import requestsRouter from './routes/requests';
import deliveriesRouter from './routes/deliveries';
import usersRouter from './routes/users';
import categoriesRouter from './routes/categories';

dotenv.config();

const app = express();

app.use(cors({ origin: /^http:\/\/localhost:\d+$/, credentials: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/requests', requestsRouter);
app.use('/api/deliveries', deliveriesRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);

export default app;

