import{Router} from "express";
import { createJob, deleteJob, getJobs, getJobsByCategory, getJobsByClient, getJobsBySpecialist, getOneJob, updateJob } from "../Controllers/jobs/jobsController";
import { verifyToken } from "../Middlewares/verifyToken";


const JobRouter = Router();


//cretae Job
JobRouter.post('/create/:id',verifyToken, createJob);

//get all Jobs
JobRouter.get('/alljobs', getJobs);

//get Jobs by Category
JobRouter.get('/:category',  getJobsByCategory);

//get one Job by id when CLient or admin gets
JobRouter.get('/job/:job_id',getOneJob);

//update Job
JobRouter.put('/update/:job_id',updateJob);

//delete Job
JobRouter.delete('/delete/:job_id', deleteJob);

//get JOB by client id
JobRouter.get('/client/:client_id', getJobsByClient);

//get JOB by specialist id
JobRouter.get('/specialist/:specialist_id',verifyToken, getJobsBySpecialist);


export default JobRouter;

