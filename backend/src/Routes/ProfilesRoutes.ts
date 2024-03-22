import{Router} from "express";
import { createProfile, deleteProfile, getProfileById, getProfileBysp, getProfiles, updateProfile } from "../Controllers/profile/spProfileController";
import { verifyToken } from "../Middlewares/verifyToken";


const profileRouter = Router();

//create profile
profileRouter.post('/create/:id',verifyToken, createProfile);

profileRouter.get('/',getProfiles);

// profileRouter.get('/:profile_id',getProfileById);

// profileRouter.put('/update/:profile_id',updateProfile);

profileRouter.delete('/delete/:profile_id',verifyToken, deleteProfile);

profileRouter.get('/:specialist_id',verifyToken,getProfileBysp);









export default profileRouter;