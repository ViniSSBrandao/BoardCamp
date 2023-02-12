import db from "../../config/database/databaseConnection.js"

export async function customerGet(req, res){
    try{
        const {rows} = await db.query("SELECT * FROM customers;") 

        return res.status(200).send(rows)
    }catch(error){
        return res.send(error.message).status(500)
    }
} 