
import express, {NextFunction, Request, Response, json} from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import spRouter from './Routes/SProutes';
import clientRouter from './Routes/clientRoutes';
import profileRouter from './Routes/spProfilesRoutes';
import authRouter from './Routes/authRoutes';


const app = express()

app.use(json())
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));




app.use('/specialist',spRouter);

app.use('/client',clientRouter);

app.use('/profile', profileRouter);

app.use('/auth', authRouter);






 
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