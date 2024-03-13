
import joi from 'joi'

export const specialistSchema = joi.object({
    firstName: joi.string().max(250).required(),
    lastName: joi.string().max(250).required(),
    email: joi.string().email().max(250).required(),
    password: joi.string().max(250).required(),
    photo: joi.string().uri().max(250).required(),
    city: joi.string().max(250).required(),
    country: joi.string().max(250).required(),
    postal: joi.string().max(250).required(),
    phone: joi.string().max(250).required()
});


