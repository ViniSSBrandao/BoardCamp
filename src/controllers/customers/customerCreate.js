import db  from "../../config/database/databaseConnection.js"

export async function customerCreate(req, res){
    const { name, phone, cpf, birthday } = req.body
    
    try{
        const costumer = await db.query("INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)", [name, phone, cpf, birthday]) 
        
        return res.sendStatus(201)
    }catch(error){
        return res.status(500).send(error.message)
    }
    
    }