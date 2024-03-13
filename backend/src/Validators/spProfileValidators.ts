
import joi from 'joi'

export const profileSchema = joi.object({
    title: joi.string().max(250).required(),
    experience: joi.string().max(250).required(),
    education: joi.string().email().max(250).required(),
    languages: joi.string().max(250).required(),
    skills: joi.string().uri().max(250).required(),
    description: joi.string().max(250).required(),
    hourlyRate: joi.string().max(250).required()
});


