import express from 'express';
import config from '../config/config';
import { connectDB } from '../adapters/database';
import { applyMiddlewares } from '../adapters/http/middlewares';
import { applyRoutes } from '../adapters/http/routes';

const app = express();

connectDB();

applyMiddlewares(app);
applyRoutes(app);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});