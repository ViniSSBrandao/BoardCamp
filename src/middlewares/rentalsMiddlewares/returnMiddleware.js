import db from "../../config/database/databaseConnection.js";

export async function rentalExistsMiddleware(req, res, next){

const { id } = req.params


try{
    const rental = await db.query(`SELECT * FROM rentals WHERE id = $1;`, [id])
    
    if(!rental.rowCount){
        return res.sendStatus(404)
    }
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}