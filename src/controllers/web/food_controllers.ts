import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as service from "../../services/food_service";
import * as apiResponse from "../api_response";

export const createFood = async (req: Request, res: Response) => {
    try {
        const newFood = await service.create(req.body);

        const response = apiResponse.success("", newFood, StatusCodes.CREATED);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const getAllFood = async (req: Request, res: Response) => {
    try {
        const food = await service.getAll();

        const response = apiResponse.success("", food);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const getFood = async (req: Request, res: Response) => {
    try {
        const food = await service.getById(Number(req.params.id));

        const response = apiResponse.success("", food);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const updateFood = async (req: Request, res: Response) => {
    try {
        const updatedFood = await service.update(Number(req.params.id), req.body);

        const response = apiResponse.success("", updatedFood);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const deleteFood = async (req: Request, res: Response) => {
    try {
        const deleted = await service.deleteById(Number(req.params.id));

        const response = deleted
            ? apiResponse.success("Food deleted")
            : apiResponse.error("Food not found", StatusCodes.NOT_FOUND);

        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};
