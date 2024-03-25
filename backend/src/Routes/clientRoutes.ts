import{Router} from "express";
import { deleteClient, getAllClients, getOneClient, registerClient, updateClient } from "../Controllers/Users/clientController";
import { verifyToken } from "../Middlewares/verifyToken";



const clientRouter = Router();


//register client
clientRouter.post('/register', registerClient);


//getAllsClient
clientRouter.get('/', getAllClients);

// getOneClient
clientRouter.get('/:client_id', getOneClient);

//update client 
clientRouter.put('/update/:client_id', updateClient);


// delete client by id
clientRouter.delete('/delete/:client_id', deleteClient);






export default clientRouter;