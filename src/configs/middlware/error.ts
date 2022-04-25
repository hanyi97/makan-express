import { Request, Response, NextFunction } from 'express';
import HttpException from '../../utils/http_exception';

export const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status = error.statusCode || error.status || 500;

    res.status(status).send(error);
};
