import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import messageRouter from "./routes/messages.js";


//  Make a new express app
const app = express();

//  1. Middleware

app.use(cors());
app.use(morgan('combined'))
app.use(express.json());

app.use(express.json());

//  2. Routes and route handlers
app.use('/api/v1/messages', messageRouter);


export { app }