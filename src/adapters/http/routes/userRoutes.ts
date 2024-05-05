import express from 'express';
import { UserController } from '../controllers/userController';
import { authenticateJWT } from '../middlewares/authMiddleware';
import { UserService } from '../../../application/services/userService';
import userRepository from '../../../infrastructure/repositories/userRepository';

const router = express.Router();

const userController = new UserController(new UserService(userRepository));

router.post('/register', userController.createUser);
router.get('/profile', authenticateJWT, userController.getUser);

export default router;