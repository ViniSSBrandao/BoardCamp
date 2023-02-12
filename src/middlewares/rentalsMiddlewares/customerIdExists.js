import db from "../../config/database/databaseConnection.js";

export async function customerIdExistsMiddleware(req, res, next){

const { customerId } = req.body


try{
    const customer = await db.query(`SELECT * FROM customers WHERE id = $1;`, [customerId])
    
    if(!customer.rowCount){
        return res.sendStatus(400)
    }
    
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}