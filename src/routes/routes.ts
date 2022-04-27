import express from "express";
import commonRoutes from "./common/common_routes";
import mobileRoutes from "./mobile/mobile_routes";
import webRoutes from "./web/web_routes";

const router = express.Router();

/**
 * All routes are prefixed with /api
 */
router.use("/", commonRoutes);
router.use("/", mobileRoutes);
router.use("/web", webRoutes);

export default router;
