import joi from "joi";

export const MessageSchema = joi.object({
    client_id: joi.string().required(),
    specialist_id: joi.string().required(),
    messagetxt: joi.string().required(),
    timestamp: joi.date().required(),
})