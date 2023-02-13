import db from "../../config/database/databaseConnection.js";

export async function rentalExistsToDeleteMiddleware(req, res, next){

const { id } = req.params

console.log("a")
try{
    const rental = await db.query(`SELECT * FROM rentals WHERE id = $1;`, [id])

    if(!rental.rows[0].returnDate){
        return res.sendStatus(400)
    }
    
    if(!rental.rowCount){
        return res.sendStatus(404)
    }
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}