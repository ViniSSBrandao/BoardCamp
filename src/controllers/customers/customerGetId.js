import db from "../../config/database/databaseConnection.js"

export async function customerGetById(req, res){
    const { id } = req.params
    try{
        const costumer = await db.query(`SELECT * FROM customers WHERE id = ${id};`)
      
        if(!costumer.rowCount){
            return res.status(404).send("User not found")
        }
        res.send(costumer.rows[0])
    }catch(error){
        return res.send(error.message).status(500)
    }

}