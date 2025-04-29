import express from 'express';
import { loginUser, registerUser ,getAllUsers } from '../controllers/userController.js';

const userRouter = express.Router();

// Define routes
userRouter.post('/user/register', registerUser);  // Registration route
userRouter.post('/user/login', loginUser);        // Login route

userRouter.get('/user/all', getAllUsers);

export default userRouter;
