import db from "../../config/database/databaseConnection.js"
export async function rentalPost(req, res){
    const  {customerId,gameId,daysRented} = req.body
 
    try{
        const game = await db.query(`SELECT * FROM games WHERE id = ${gameId}`) 
        // const insertGame = await db.query(`INSERT INTO rentals (name, image, "stockTotal", "pricePerDay") VALUES ($1,$2,$3,$4);`, [customerId, gameId, daysRented]) 
        return res.status(201).send(game.rows)
    }catch(error){
        return res.status(500).send(error.message)
    } 
}