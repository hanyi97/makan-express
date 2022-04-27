import express from 'express';
import { authorize } from '../../configs/middlware/auth';
import * as controller from '../../controllers/common/user_controllers';

const router = express.Router();

/**
 * POST /api/users/createUser
 *
 * Note: Authorization is removed here to allow me to create
 * a user without logging in. This should be set during the real
 * development.
 *
 * Authorization: false
 */
router.post('/createUser', controller.createUser);

/**
 * GET /api/users/getAllUsers
 *
 * Authorization: true
 */
router.get('/getAllUsers', authorize, controller.getAllUsers);

/**
 * GET /api/users/getUser/:id
 *
 * Authorization: true
 */
router.get('/getUser/:id', authorize, controller.getUser);

/**
 * PUT /api/users/updateUser/:id
 *
 * Authorization: true
 */
router.put('/updateUser/:id', authorize, controller.updateUser);

/**
 * DELETE /api/users/deleteUser/:id
 *
 * Authorization: true
 */
router.delete('/deleteUser/:id', authorize, controller.deleteUser);

export default router;
