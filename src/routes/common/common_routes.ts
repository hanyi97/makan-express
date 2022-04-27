import express from 'express';
import authRoutes from './auth_routes';
import userRoutes from './user_routes';

const router = express.Router();

/**
 * All routes are prefixed with /api
 */
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;
