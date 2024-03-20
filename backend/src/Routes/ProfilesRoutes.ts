import{Router} from "express";
import { createProfile, deleteProfile, getProfileById, getProfileBysp, getProfiles, updateProfile } from "../Controllers/profile/spProfileController";


const profileRouter = Router();

//create profile
profileRouter.post('/create/:id',createProfile);

profileRouter.get('/',getProfiles);

// profileRouter.get('/:profile_id',getProfileById);

// profileRouter.put('/update/:profile_id',updateProfile);

profileRouter.delete('/delete/:profile_id',deleteProfile);

profileRouter.get('/:specialist_id',getProfileBysp);









export default profileRouter;