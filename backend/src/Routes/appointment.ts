import{Router} from "express";
import { createAppointment } from "../Controllers/appointment/appointment";


const appointRouter = Router();


//send appointment
appointRouter.post('/appointments', createAppointment);



export default appointRouter;