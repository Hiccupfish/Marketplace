"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
const products_1 = __importDefault(require("./routes/products"));
const services_1 = __importDefault(require("./routes/services"));
const requests_1 = __importDefault(require("./routes/requests"));
const deliveries_1 = __importDefault(require("./routes/deliveries"));
const categories_1 = __importDefault(require("./routes/categories"));
const users_1 = __importDefault(require("./routes/users"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// CORS configuration: Permissive for testing phase
// Uses origin: true to reflect requesting origin, required for credentials: true with any-origin access
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express_1.default.json({ limit: '30mb' }));
// Lightweight request log (dev only) so a stray/incorrect URL is easy to trace while testing.
if (process.env.NODE_ENV !== 'production') {
    app.use((req, _res, next) => {
        console.log(`[api] ${req.method} ${req.originalUrl}`);
        next();
    });
}
app.use('/api/auth', auth_1.default);
app.use('/api/products', products_1.default);
app.use('/api/services', services_1.default);
app.use('/api/requests', requests_1.default);
app.use('/api/categories', categories_1.default);
app.use('/api/deliveries', deliveries_1.default);
app.use('/api/users', users_1.default);
// Anything that reaches this point matched no route. Answer with JSON instead of Express's
// bare HTML 404, so a mistyped/stale URL explains itself while testing.
app.use((req, res) => {
    res.status(404).json({ message: `No API route for ${req.method} ${req.originalUrl}` });
});
// Body parsing errors (e.g. an oversized image payload) must be answered with JSON so the
// client can surface a useful message instead of an HTML error page.
app.use((err, _req, res, next) => {
    if (err?.type === 'entity.too.large') {
        return res.status(413).json({ message: 'Uploaded images are too large. Please use smaller images (max 3MB each).' });
    }
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({ message: 'Invalid request body' });
    }
    return next(err);
});
exports.default = app;
