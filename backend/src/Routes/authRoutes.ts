import{Router} from "express";

import { loginUser, resetPassword } from "../Controllers/auth/authController";
import { verifyToken } from "../Middlewares/verifyToken";

const authRouter = Router();


//register specialist
authRouter.post('/auth/login',loginUser);

//reset password for both client and specialist
authRouter.put('/resetPassword', verifyToken, resetPassword);

export default authRouter;