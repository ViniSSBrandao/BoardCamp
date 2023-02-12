import { customerSchema } from "../../model/schemas/customerSchema.js";

export async function customerValidateMiddleware(req, res, next){
const { name, phone, cpf, birthday } = req.body

try{
    const {error} = customerSchema.validate({ name, phone, cpf, birthday }, {abortEarly: false})
    if(error){
        res.status(400).send(error.message)
    }
    next();
}catch(error){
    return res.status(500).send(error)
}

}