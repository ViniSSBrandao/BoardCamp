import joi from "joi";

export const costumerSchema = joi.object({
    id: joi.string().required(),
    name: joi.string().required(),
    phone: joi.string().pattern(/^[0-9]+$/).required(),
    cpf: joi.string().length(11).pattern(/^[0-9]+$/).required(),
    birthday: joi.date().required(),
  })