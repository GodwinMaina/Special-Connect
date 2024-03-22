import{Router} from "express";
import { createAppointment } from "../Controllers/appointment/appointment";
import { verifyToken } from "../Middlewares/verifyToken";


const appointRouter = Router();


//send appointment ===> client send to specialist
appointRouter.post('/appointments',verifyToken, createAppointment);

//recieve appointment ==> specialist receive from client
appointRouter.get('/appointments',verifyToken, createAppointment);


export default appointRouter;