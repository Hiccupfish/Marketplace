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

// CORS configuration: Permissive for testing phase
// Uses origin: true to reflect requesting origin, required for credentials: true with any-origin access
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '30mb' }));

// Lightweight request log (dev only) so a stray/incorrect URL is easy to trace while testing.
if (process.env.NODE_ENV !== 'production') {
  app.use((req: express.Request, _res: express.Response, next: express.NextFunction) => {
    console.log(`[api] ${req.method} ${req.originalUrl}`);
    next();
  });
}

// Lenient handling for the "/create" spelling used while testing (it is an app route, not an
// API route): POST /api/<resource>/create creates, and GET explains itself instead of 404ing.
const CREATE_ALIAS = /^\/api\/(products|services|requests)\/create(\?.*)?$/;

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const match = req.url.match(CREATE_ALIAS);
  if (!match) return next();

  const resource = match[1];
  const query = match[2] || '';

  if (req.method === 'POST') {
    const target = `/api/${resource}${query}`;
    console.log(`[api] alias ${req.method} ${req.url} -> ${target}`);
    req.url = target;
    return next();
  }

  console.log(`[api] lenient ${req.method} ${req.url}`);
  return res.status(200).json({
    message: `${req.method} ${req.url} is not a create action, so nothing was created.`,
    didYouMean: `POST /api/${resource}${query}`,
    note: `In the app the page is /listings/create${resource === 'requests' ? '' : '?type=service'} (products: /listings/create).`,
  });
});

app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/requests', requestsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/deliveries', deliveriesRouter);
app.use('/api/users', usersRouter);

// Anything that reaches this point matched no route. Answer with JSON instead of Express's
// bare HTML 404, so a mistyped/stale URL explains itself while testing.
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: `No API route for ${req.method} ${req.originalUrl}` });
});

// Body parsing errors (e.g. an oversized image payload) must be answered with JSON so the
// client can surface a useful message instead of an HTML error page.
app.use((err: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err?.type === 'entity.too.large') {
    return res.status(413).json({ message: 'Uploaded images are too large. Please use smaller images (max 3MB each).' });
  }
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ message: 'Invalid request body' });
  }
  return next(err);
});

export default app;