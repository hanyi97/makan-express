import express from "express";
import { authorize } from "../../configs/middlware/auth";
import * as controller from "../../controllers/common/auth_controllers";

const router = express.Router();

/**
 * POST /api/auth/login
 *
 * Authorization: false
 */
router.post("/login", controller.login);

/**
 * POST /api/auth/logout
 *
 * Authorization: true
 */
router.post("/logout", authorize, controller.logout);

export default router;
