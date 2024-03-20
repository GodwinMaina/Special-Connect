import joi from 'joi'

export const createApplicationSchema = joi.object({
    job_id: joi.string().required(),
    client_id: joi.string().required(),
    specialist_id: joi.string().required()
})
