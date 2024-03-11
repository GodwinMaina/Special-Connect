
import express, {NextFunction, Request, Response, json} from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express()

app.use(json())
 app.use(cors());

 app.use(bodyParser.urlencoded({ extended: false }));

 app.use(express.urlencoded({ extended: true }));

 
app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
    next()
})


let port = 8080;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`); 
})