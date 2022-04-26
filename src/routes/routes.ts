import express from 'express';
import authRoutes from './auth_routes';
import userRoutes from './user_routes';
import foodRoutes from './food_routes';

const router = express.Router();

/**
 * Add your routes here.
 * All routes are prefixed with /api
 */
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/food', foodRoutes);

export default router;
