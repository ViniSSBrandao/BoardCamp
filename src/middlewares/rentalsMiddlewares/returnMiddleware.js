import db from "../../config/database/databaseConnection.js";

export async function rentalExistsMiddleware(req, res, next){

const { id } = req.params

console.log("a")
try{
    const rental = await db.query(`SELECT * FROM rentals WHERE id = $1;`, [id])

    if(!rental.rowCount){
        return res.sendStatus(404)
    }
    
    if(rental.rows[0].returnDate){
        return res.sendStatus(400)
    }
    
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}