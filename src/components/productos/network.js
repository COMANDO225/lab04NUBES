import { Router } from "express";
import { findAll } from "./controller";

const router = Router();

router.get("/", findAll);

export default router;
