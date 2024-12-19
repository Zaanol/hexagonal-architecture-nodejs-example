import express, { Request, Response, NextFunction } from 'express';

export const handleErrors = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack);

    if (err instanceof Error && err.message) {
        res.status(400).json({ message: err.message });
    } else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const handleNotFound = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(404).json({ message: 'Route not found' });
};

export const applyErrorMiddleware = (app: express.Application) => {
    app.use(handleErrors);
    app.use(handleNotFound);
};