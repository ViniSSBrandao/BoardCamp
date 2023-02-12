import db from "../../config/database/databaseConnection.js"

export async function costumerGet(req, res){
    try{
        const {rows} = await db.query("SELECT * FROM costumers") 

        return res.status(200).send(rows)
    }catch(error){
        return res.send(error.message).status(500)
    }
} 