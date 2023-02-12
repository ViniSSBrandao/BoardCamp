import db from "../../config/database/databaseConnection.js"

export async function customerGetById(req, res){
    const { id } = req.params
    try{
        const costumer = await db.query('SELECT * FROM customers WHERE name = $1;', [id])
        console.log(id)
        res.send(costumer.row)
    }catch(error){
        return res.send(error.message).status(500)
    }

} 