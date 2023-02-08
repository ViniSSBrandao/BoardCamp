import { costumerSchema } from "../model/schemas/costumerSchema.js";

export async function costumerPostMiddleware(req, res, next){
const { id, name, image, stockTotal , pricePerDay } = req.body

try{
    const {error} = costumerSchema.validate({id, name, image, stockTotal , pricePerDay}, {abortEarly: false})
    if(error){
        res.status(400).send(error.response)
    }
}catch(error){
    return res.status(500).send(error.response)
}

}