import { costumerSchema } from "../../model/schemas/costumerSchema.js";

export async function costumerPostMiddleware(req, res, next){
const {  id, name, phone, cpf, birthday } = req.body

try{
    const {error} = costumerSchema.validate({ id, name, phone, cpf, birthday }, {abortEarly: false})
    if(error){
        res.status(400).send(error.response)
    }
    next();
}catch(error){
    return res.status(500).send(error.response)
}

}