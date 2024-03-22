import{Router} from "express";
import { createApplication, deleteApplication, getJobApplicationsByJobID, getSpecialistApplications, updateApplication } from "../Controllers/applications/application";
import { verifyToken } from "../Middlewares/verifyToken";


const applicationRouter = Router();

//send appointment
applicationRouter.post('/apply', createApplication)

applicationRouter.put('/:apply_id', verifyToken,updateApplication)

applicationRouter.delete('/:apply_id',verifyToken, deleteApplication)

applicationRouter.get('/job/:job_id',verifyToken, getJobApplicationsByJobID)

applicationRouter.get('/specialist/:specialist_id',verifyToken, getSpecialistApplications)

export default applicationRouter;