import db from "../../config/database/databaseConnection.js";

export async function gameAvailableMiddleware(req, res, next){

const { gameId } = req.body
console.log(req.body)

try{
    const game = await db.query(`SELECT * FROM games WHERE id = $1;`, [gameId])
    // let gamesAvailable = game[0].
    console.log(game.rowCount)
    if(!game.rowCount){
        return res.sendStatus(400)
    }
    
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}