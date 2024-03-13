

import joi from 'joi'

export const clientSchema = joi.object({
    firstName: joi.string().max(250).required(),
    lastName: joi.string().max(250).required(),
    email: joi.string().email().max(250).required(),
    password: joi.string().max(250).required(),
    phone: joi.string().max(250).required()
});


