import{Router} from "express";
import { createApplication, deleteApplication, getJobApplicationsByJobID, getSpecialistApplications, updateApplication } from "../Controllers/applications/application";
import { verifyToken } from "../Middlewares/verifyToken";


const applicationRouter = Router();

//send appointment
applicationRouter.post('/apply', createApplication)

applicationRouter.put('/:apply_id',updateApplication)

applicationRouter.delete('/:apply_id', deleteApplication)

applicationRouter.get('/job/:job_id', getJobApplicationsByJobID)

applicationRouter.get('/specialist/:specialist_id', getSpecialistApplications)

export default applicationRouter;