import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";

const router = Router();

export const healthRouter = router.get("/", healthCheck);
