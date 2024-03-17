import{Router} from "express";
import { createProfile, deleteProfile, getProfileById, getProfiles, updateProfile } from "../Controllers/profile/spProfileController";
import { get } from "http";


const profileRouter = Router();

//create profile
profileRouter.post('/create/',createProfile);

profileRouter.get('/',getProfiles);

profileRouter.get('/:profile_id',getProfileById);

profileRouter.put('/update/:profile_id',updateProfile);

profileRouter.delete('/delete/:profile_id',deleteProfile);


export default profileRouter;