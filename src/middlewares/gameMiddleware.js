
import db from "../config/database/databaseConnection.js";
import { gameSchema } from "../model/schemas/gameSchema.js"

export async function gameMiddleware(req, res, next){
    const { id, name, image, stockTotal, pricePerDay } = req.body;

    try{
        const {error} = gameSchema.validate({ name, image, stockTotal, pricePerDay }, { abortEarly: false });
        if(error) {
            return res.status(400).send(error)
        } 
        next();
    }catch(error){
        return res.status(500).send(error)
    }
}

export async function gameExists(req, res, next){
    const { name } = req.body
    try {
        const gameDoubled = await db.query("SELECT * FROM games WHERE name = $1;", [name]);
        if(gameDoubled.rowCount){
            return res.sendStatus(409)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
    next();
}