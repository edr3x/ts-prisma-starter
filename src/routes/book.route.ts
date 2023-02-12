import { Router } from "express";

import * as BookController from "../controllers/book.controller";

import { verifyInput } from "../middlewares/verifyInput.middleware";

import {
    createBookSchema,
    deleteBookSchema,
    getOneBookSchema,
    updateBookSchema,
} from "../schemas/book.schema";

const router = Router();

router.get("/", BookController.getAllBookController);

router.get(
    "/:id",
    verifyInput(getOneBookSchema),
    BookController.getOneBookController
);

router.post(
    "/",
    verifyInput(createBookSchema),
    BookController.createBookController
);

router.patch(
    "/:id",
    verifyInput(updateBookSchema),
    BookController.updateBookController
);

router.delete(
    "/:id",
    verifyInput(deleteBookSchema),
    BookController.deleteBookController
);

export default router;
