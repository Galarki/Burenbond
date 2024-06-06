import express from 'express';
import {createMessage, getMessages} from '../controllers/messages.js';

const messageRouter = express.Router();

messageRouter.route('/')
    .get(getMessages)
    .post(createMessage)



export default messageRouter;