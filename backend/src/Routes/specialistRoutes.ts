import{Router} from "express";
import { deleteSpecialist, getAllSpecialists, getOneSpecialist, registerSpecialist, updateSpecialist } from "../Controllers/Users/spController";


const spRouter = Router();

//register specialist
spRouter.post('/register', registerSpecialist);

//getAllspecialist
spRouter.get('/', getAllSpecialists);

// getOneSpecialist
spRouter.get('/:specialist_id', getOneSpecialist);

//update specialist
spRouter.put('/update/:specialist_id', updateSpecialist);


// delete specialist by id
spRouter.delete('/delete/:specialist_id', deleteSpecialist);


export default spRouter;