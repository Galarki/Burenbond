import express from 'express';
import {createMessage, deleteMessage, getMessages, getMessage} from '../controllers/messages.js';

const messageRouter = express.Router();

messageRouter.route('/')
    .get(getMessages)
    .post(createMessage)

messageRouter.route('/:id')
    .get(getMessage)
    .delete(deleteMessage)


export default messageRouter;