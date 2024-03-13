import{Router} from "express";
import { registerClient } from "../Controllers/Users/clientController";



const clientRouter = Router();


//register specialist
clientRouter.post('/register', registerClient);






export default clientRouter;