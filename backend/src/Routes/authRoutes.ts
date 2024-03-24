import{Router} from "express";

import { checkUserDetails, loginUser, resetPassword } from "../Controllers/auth/authController";
import { verifyToken } from "../Middlewares/verifyToken";

const authRouter = Router();


//register specialist
authRouter.post('/auth/login',loginUser);


//check user details
authRouter.get('/auth/checkdetails', verifyToken,checkUserDetails);


//reset password for both client and specialist
authRouter.put('/resetPassword', resetPassword);

export default authRouter;