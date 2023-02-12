import { Request, Response } from "express";

import { errorResponse, successResponse } from "../utils/response";

import * as BookService from "../services/book.services";

import {
    CreateBookInput,
    DeleteBookInput,
    GetOneBookInput,
    UpdateBookInput,
} from "../schemas/book.schema";

export const createBookController = async (
    req: Request<{}, {}, CreateBookInput>,
    res: Response
) => {
    try {
        const response = await BookService.createBook(req.body);
        return res.status(200).json(successResponse(response));
    } catch (e: any) {
        return res.status(500).json(errorResponse(e.message));
    }
};

export const getAllBookController = async (_req: Request, res: Response) => {
    try {
        const response = await BookService.getAllBook();
        return res.status(200).json(successResponse(response));
    } catch (e: any) {
        return res.status(500).json(errorResponse(e.message));
    }
};

export const getOneBookController = async (
    req: Request<GetOneBookInput>,
    res: Response
) => {
    try {
        const response = await BookService.getBookById(req.params.id);
        return res.status(200).json(successResponse(response));
    } catch (e: any) {
        return res.status(500).json(errorResponse(e.message));
    }
};

export const updateBookController = async (
    req: Request<UpdateBookInput["params"], {}, UpdateBookInput["body"]>,
    res: Response
) => {
    try {
        const response = await BookService.updateBook(req.params.id, req.body);
        return res.status(200).json(successResponse(response));
    } catch (e: any) {
        return res.status(500).json(errorResponse(e.message));
    }
};

export const deleteBookController = async (
    req: Request<DeleteBookInput>,
    res: Response
) => {
    try {
        const response = await BookService.deleteBook(req.params.id);
        return res.status(200).json(successResponse(response));
    } catch (e: any) {
        return res.status(500).json(errorResponse(e.message));
    }
};
