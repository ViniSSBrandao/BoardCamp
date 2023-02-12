import db  from "../../config/database/databaseConnection.js"

export async function customerPut(req, res){
    const { name, phone, cpf, birthday } = req.body
    
    try{
        const costumer = await db.query("UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id = $5;", [name, phone, cpf, birthday, id]); 
        
        return res.sendStatus(200)
    }catch(error){
        return res.status(500).send(error.message)
    }
    
    }