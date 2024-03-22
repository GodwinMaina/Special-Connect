
import{Router} from "express";
import { createReview, getSpecialistReviews } from "../Controllers/reviews/reviews";
import { verifyToken } from "../Middlewares/verifyToken";


const reviewRouter = Router();


//cretae review to specialist
reviewRouter.post('/',verifyToken,createReview );

//get specialist reviews by specialist_id
reviewRouter.get('/:specialist_id',verifyToken ,getSpecialistReviews);



export default reviewRouter;

