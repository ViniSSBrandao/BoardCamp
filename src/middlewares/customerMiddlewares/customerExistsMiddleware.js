import db from "../../config/database/databaseConnection.js";

export async function customerExistsMiddleware(req, res, next){
const { cpf } = req.body
const { id } = req.params


try{
    const exists = await db.query("SELECT * FROM customers WHERE cpf = $1;", [cpf])
    let storedId;
    if(exists.rowCount>0){
         storedId =  exists.rows[0].id
    }


    if((id != storedId) && storedId){
        return res.sendStatus(409)
    }

    if(exists.rowCount && !id){
        return res.sendStatus(409)
    }
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}