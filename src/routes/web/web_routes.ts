import express from 'express';
import foodRoutes from './food_routes';

const router = express.Router();

/**
 * All routes are prefixed with /api/web
 */
router.use('/food', foodRoutes);

export default router;
