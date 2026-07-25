import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import listingsRouter from './routes/listings';
import sellersRouter from './routes/sellers';
import offersRouter from './routes/offers';
import deliveryRouter from './routes/delivery';

dotenv.config();

const app = express();

app.use(cors({ origin: /^http:\/\/localhost:\d+$/, credentials: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/listings', listingsRouter);
app.use('/api/sellers', sellersRouter);
app.use('/api/offers', offersRouter);
app.use('/api/delivery', deliveryRouter);

export default app;

