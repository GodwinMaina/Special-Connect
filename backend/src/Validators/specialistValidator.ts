
import joi from 'joi'

export const specialistSchema = joi.object({
    photo: joi.string().uri().max(250).required(),
    firstName: joi.string().max(250).required(),
    lastName: joi.string().max(250).required(),
    email: joi.string().email().max(250).required(),
    password: joi.string().max(250).required(),
    location:joi.string().max(250).required(),
    phone: joi.string().max(250).required(),
    role:joi.string().max(250).required(),
    experience: joi.string().max(250).required(),
    education: joi.string().max(250).required(),
    languages: joi.string().max(250).required(),
    skills: joi.string().max(250).required(),
    description: joi.string().max(250).required(),
    hourlyRate: joi.string().max(250).required()
});


