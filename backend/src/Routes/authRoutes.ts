import{Router} from "express";

import { loginUser } from "../Controllers/auth/authController";


const authRouter = Router();


//register specialist
authRouter.post('/login', loginUser);






export default authRouter;