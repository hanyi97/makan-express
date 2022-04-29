import express from "express";
import commonRoutes from "./common";
import mobileRoutes from "./mobile";
import webRoutes from "./web";

const router = express.Router();

/**
 * All routes are prefixed with /api
 */
router.use("/", commonRoutes);
router.use("/", mobileRoutes);
router.use("/web", webRoutes);

export default router;
