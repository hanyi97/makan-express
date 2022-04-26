import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../../utils/http_exception';
import * as apiResponse from '../../controllers/api_response';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status = error.statusCode || error.status || StatusCodes.INTERNAL_SERVER_ERROR;

    const response = apiResponse.error(error.message, status);
    res.status(response.code).send(response.response);
};
