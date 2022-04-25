import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as service from '../../services/food_service';

export const createFood = async (req: Request, res: Response) => {
    try {
        const newFood = await service.create(req.body);
        res.status(StatusCodes.CREATED).json(newFood);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const getAllFoods = async (req: Request, res: Response) => {
    try {
        const foods = await service.getAll();
        res.status(StatusCodes.OK).json(foods);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const getFood = async (req: Request, res: Response) => {
    try {
        const food = await service.getById(Number(req.params.id));
        res.status(StatusCodes.OK).json(food);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const updateFood = async (req: Request, res: Response) => {
    try {
        const updatedFood = await service.update(Number(req.params.id), req.body);
        res.status(StatusCodes.OK).json(updatedFood);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};

export const deleteFood = async (req: Request, res: Response) => {
    try {
        const deleted = await service.deleteById(Number(req.params.id));
        res.status(StatusCodes.OK).json(deleted);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send((<Error>error).message);
    }
};
