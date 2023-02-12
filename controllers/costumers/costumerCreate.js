import db  from "../../config/database/databaseConnection.js"

export async function costumerCreate(req, res){
    const {  id, name, phone, cpf, birthday } = req.body
    
    try{
        const costumer = await db.query("SELECT * FROM jooj") 
        
        return res.sendStatus(201)
    }catch(error){
        return res.status(500).send(error.message)
    }
    
    }