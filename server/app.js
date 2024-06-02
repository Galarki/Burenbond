import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import messageRouter from "./routes/messages.js";


//  Make a new express app
const app = express();

// app.get('/', (req, res) => {
//     res.status(201)
//         .json({ message: 'Hello World' })
// })


//  1. Middleware

app.use(cors());
//app.use(morgan('combined'))
app.use(express.json());

//  add JSON middleware
app.use(express.json());

//  2. Routes and route handlers
app.use(messageRouter);


export { app }