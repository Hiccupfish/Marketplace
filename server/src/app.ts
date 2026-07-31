import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/auth';
import productsRouter from './routes/products';
import servicesRouter from './routes/services';
import requestsRouter from './routes/requests';
import deliveriesRouter from './routes/deliveries';
import categoriesRouter from './routes/categories';
import usersRouter from './routes/users';

dotenv.config();

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/requests', requestsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/deliveries', deliveriesRouter);
app.use('/api/users', usersRouter);

export default app;