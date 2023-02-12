import db from "../../config/database/databaseConnection.js"
export async function gamePost(req, res){
    const {id, name, image, stockTotal, pricePerDay} = req.body
    console.log(name)
    try{
        const insertGame = await db.query(`INSERT INTO games (name, image, stockTotal, pricePerDay) VALUES ($1,$2,$3,$4)`, [name, image, stockTotal, pricePerDay]) 
        return res.sendStatus(201)
    }catch(error){
        return res.status(500).send(error.message)
    } 
}