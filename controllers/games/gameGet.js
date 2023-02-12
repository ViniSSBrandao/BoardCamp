import db from "../../config/database/databaseConnection.js"
export async function gameGet(req, res){
    try{
        const {rows} = await db.query("SELECT * FROM games;") 
        return res.send(rows)
    }catch(error){
        return res.status(500).send(error.message)
    } 
}