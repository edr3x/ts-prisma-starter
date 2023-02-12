import { Router } from "express";

import healthCheck from "./healthcheck.route";
import book from "./book.route";

export const router = Router();

router.use("/healthcheck", healthCheck);
router.use("/book", book);
