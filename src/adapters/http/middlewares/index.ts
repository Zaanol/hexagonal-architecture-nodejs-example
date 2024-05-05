import express from 'express';
import { applyAuthMiddleware } from './authMiddleware';
import { applyErrorMiddleware } from './errorMiddleware';

export const applyMiddlewares = (app: express.Application) => {
    applyAuthMiddleware(app);
    applyErrorMiddleware(app);
};