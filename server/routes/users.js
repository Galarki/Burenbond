import express from 'express';
import {users} from '../controllers/users.js';

const userRouter = express.Router();

userRouter.route('/')
    .get(users)

export default userRouter;