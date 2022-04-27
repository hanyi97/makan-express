import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as service from '../../services/auth_service';
import * as apiResponse from '../api_response';

export const login = async (req: Request, res: Response) => {
    try {
        const jwt = await service.login(req.body);

        const response = apiResponse.success('Login successful', {}, StatusCodes.ACCEPTED);
        return res
            .status(response.code)
            .cookie('accessToken', jwt, {
                httpOnly: true,
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                secure: process.env.NODE_ENV === 'production',
            })
            .json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response.response);
    }
};

export const logout = (req: Request, res: Response) => {
    const response = apiResponse.success('Logout successful');
    res.clearCookie('accessToken').status(response.code).json(response.response);
};
