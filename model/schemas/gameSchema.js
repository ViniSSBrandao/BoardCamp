import joi from "joi";

export const gameSchema = joi.object({
      id: joi.string().required(),
      name: joi.string().required(),
      image: joi.string().required(),
      stockTotal: joi.number().required().min(0),
      pricePerDay: joi.number().required().min(0),
});