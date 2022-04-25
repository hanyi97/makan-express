import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as service from '../../services/user_service';

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await service.create(req.body);
        res.status(StatusCodes.CREATED).json(newUser);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await service.getAll();
        res.status(StatusCodes.OK).json(users);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await service.getById(req.params.id);
        res.status(StatusCodes.OK).json(user);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const updatedUser = await service.update(req.params.id, req.body);
        res.status(StatusCodes.OK).json(updatedUser);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const deleted = await service.deleteById(req.params.id);
        res.status(StatusCodes.OK).json(deleted);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};
