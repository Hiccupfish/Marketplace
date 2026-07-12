import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import listingsRouter from './routes/listings';
import sellersRouter from './routes/sellers';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/listings', listingsRouter);
app.use('/api/sellers', sellersRouter);

export default app;
