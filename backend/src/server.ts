
import express, {NextFunction, Request, Response, json} from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

import clientRouter from './Routes/clientRoutes';
import authRouter from './Routes/authRoutes';
import spRouter from './Routes/specialistRoutes';
import profileRouter from './Routes/ProfilesRoutes';
import JobRouter from './Routes/JobRoutes';

import { Server } from "socket.io";
import appointRouter from './Routes/appointment';

const app = express()

app.use(json())
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));


app.use('/specialist',spRouter);

app.use('/client',clientRouter);

app.use(authRouter);

app.use('/profiles', profileRouter);

app.use('/jobs', JobRouter);

app.use(appointRouter)
 
app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
    next()
})


let port = 4000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`); 
})



///sockets io

// const io = new Server(3000, { /* options */ });

// io.on("connection", (socket) => {
//     console.log('connection done', socket)
//   // ...
// });

// io.listen(3000);