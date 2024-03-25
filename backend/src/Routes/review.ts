
import{Router} from "express";
import { createReview, getSpecialistReviews } from "../Controllers/reviews/reviews";
import { verifyToken } from "../Middlewares/verifyToken";


const reviewRouter = Router();


//cretae review to specialist
reviewRouter.post('/',createReview );

//get specialist reviews by specialist_id
reviewRouter.get('/:specialist_id',getSpecialistReviews);



export default reviewRouter;

