import express from 'express';
import { applyAuthMiddleware } from './authMiddleware';
import { applyErrorMiddleware } from './errorMiddleware';

export const applyMiddlewares = (app: express.Application) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    applyAuthMiddleware(app);
};

export { applyErrorMiddleware };