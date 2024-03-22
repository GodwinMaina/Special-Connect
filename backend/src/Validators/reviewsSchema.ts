import joi from 'joi';

export const reviewSchema = joi.object({
    review_id: joi.string().required(),
    client_id: joi.string().required(),
    specialist_id: joi.string().required(),
    comment: joi.string().max(250).required()
});
