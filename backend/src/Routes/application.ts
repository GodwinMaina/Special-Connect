import{Router} from "express";
import { createApplication } from "../Controllers/applications/apply";


const applicationRouter = Router();


//send appointment
applicationRouter.post('/apply', createApplication);



export default applicationRouter;