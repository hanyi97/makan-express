import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as service from '../../services/auth_service';

export const login = async (req: Request, res: Response) => {
    try {
        const jwt = await service.login(req.body);
        return res
            .status(StatusCodes.ACCEPTED)
            .cookie('accessToken', jwt, {
                httpOnly: true,
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                secure: process.env.NODE_ENV === 'production',
            })
            .send('Authorized');
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie('accessToken').status(StatusCodes.OK).send('Logged out');
};
