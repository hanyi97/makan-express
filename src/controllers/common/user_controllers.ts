import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as service from "../../services/user_service";
import * as apiResponse from "../api_response";

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await service.create(req.body);

        const response = apiResponse.success("", newUser, StatusCodes.CREATED);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await service.getAll();

        const response = apiResponse.success("", users);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await service.getById(req.params.id);

        const response = apiResponse.success("", user);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const updatedUser = await service.update(req.params.id, req.body);

        const response = apiResponse.success("", updatedUser);
        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const deleted = await service.deleteById(req.params.id);

        const response = deleted
            ? apiResponse.success("User deleted", {})
            : apiResponse.error("User not found", StatusCodes.NOT_FOUND);

        res.status(response.code).json(response.response);
    } catch (error) {
        const response = apiResponse.error((<Error>error).message);
        res.status(response.code).json(response.response);
    }
};
