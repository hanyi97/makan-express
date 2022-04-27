import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as apiResponse from "../../controllers/api_response";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const response = apiResponse.error("Resource not found", StatusCodes.NOT_FOUND);
    res.status(response.code).send(response.response);
};
