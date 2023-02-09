
import { gameSchema } from "../model/schemas/gameSchema.js"

export async function gameMiddleware(req, res, next){
    const { id, name, image, stockTotal, pricePerDay } = req.body;

    try{
        const {error} = gameSchema.validate({ id, name, image, stockTotal, pricePerDay }, { abortEarly: false });
        if(error) {
            return res.status(400).send(error)
        } 
        return res.sendStatus(201)
        next();
    }catch(error){
        return res.status(500).send(error.message)
    }
}