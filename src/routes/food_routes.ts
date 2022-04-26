import express from 'express';
import * as controller from '../controllers/web/food_controllers';

const router = express.Router();

/**
 * POST /api/foods/createFood
 *
 * Authorization: true
 */
router.post('/createFood', controller.createFood);

/**
 * GET /api/foods/getAllFoods
 *
 * Authorization: false
 */
router.get('/getAllFood', controller.getAllFood);

/**
 * GET /api/foods/getFood/:id
 *
 * Authorization: false
 */
router.get('/getFood/:id', controller.getFood);

/**
 * PUT /api/foods/updateFood/:id
 *
 * Authorization: true
 */
router.put('/updateFood/:id', controller.updateFood);

/**
 * DELETE /api/foods/deleteFood/:id
 *
 * Authorization: true
 */
router.delete('/deleteFood/:id', controller.deleteFood);

export default router;
