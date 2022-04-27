import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { validateToken } from "../../utils/jwt";

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized");
    }

    try {
        const decoded = await validateToken(token);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log((<Error>error).message);
        res.status(StatusCodes.UNAUTHORIZED).send("Token is not valid");
    }
};
