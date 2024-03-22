
import express, {NextFunction, Request, Response, json} from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

import clientRouter from './Routes/clientRoutes';
import authRouter from './Routes/authRoutes';
import spRouter from './Routes/specialistRoutes';
import profileRouter from './Routes/ProfilesRoutes';
import JobRouter from './Routes/JobRoutes';


import appointRouter from './Routes/appointment';
import applicationRouter from './Routes/application';


import http from 'http'
import {Server} from 'socket.io'
import mssql, { ConnectionPool } from 'mssql';
import { sqlConfig } from './Config/sqlConfig';
import reviewRouter from './Routes/review';
import messageRouter from './Routes/messages';

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


app.use('/applications',applicationRouter)

app.use(appointRouter)


app.use( '/reviews',reviewRouter)


app.use('/messages', messageRouter)

 
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



//web sockets
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4100",
        methods:["GET", "POST", "DELETE", "PUT"]
    }
});


io.on('connection', (socket) => {
    console.log('client connected', socket.id);

    socket.on('message', (message) => {
        console.log('Received message: ', message);
        
        socket.broadcast.emit('message', message);
    })

    socket.on('disconnect', () => {
        console.log('client disconnected', socket.id);        
    })
    
})


mssql.connect(sqlConfig, (err?: Error, connect?: ConnectionPool, req?: Request, res?: Response) => {
    if (err) {
        res?.status(500).json({
            err
        })
    } else if (connect) {
        console.log("connected to mssql db");
        const PORT = 4100;
        app.listen(PORT, () => {
            console.log('App Socket  listening on port', PORT);
        })
    }
})

export { io};