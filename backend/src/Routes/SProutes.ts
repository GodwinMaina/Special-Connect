import{Router} from "express";
import { registerSpecialist } from "../Controllers/Users/spController";


const spRouter = Router();


//register specialist
spRouter.post('/register', registerSpecialist);






export default spRouter;