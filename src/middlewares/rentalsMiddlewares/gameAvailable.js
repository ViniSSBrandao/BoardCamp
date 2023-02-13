import db from "../../config/database/databaseConnection.js";

export async function gameAvailableMiddleware(req, res, next){

const { gameId } = req.body
console.log(req.body)

try{
    const game = await db.query(`SELECT * FROM games WHERE id = $1;`, [gameId])
    const rentedAmount = await db.query(`SELECT * FROM rentals WHERE "gameId" = ${gameId}`)
    // let gamesAvailable = game[0].
    console.log(rentedAmount.rowCount)
    if(!game.rowCount || rentedAmount.rowCount>=game.rows[0].stockTotal){
        return res.sendStatus(400)
    }
    
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}