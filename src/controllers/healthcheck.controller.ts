import { Request, Response } from "express";

import { errorResponse, successResponse } from "../utils/response";

import * as CheckService from "../services/healthcheck.service";

export const testController = async (_req: Request, res: Response) => {
    try {
        const test = await CheckService.checkRoute();

        return res.status(200).json(successResponse(test));
    } catch (e: any) {
        return res.status(500).json(errorResponse(e.message));
    }
};
