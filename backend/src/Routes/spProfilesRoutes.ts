import{Router} from "express";
import { createProfile } from "../Controllers/profile/spProfileController";


const profileRouter = Router();


//create profile
profileRouter.post('/create/:specialist_id',createProfile);




export default profileRouter;