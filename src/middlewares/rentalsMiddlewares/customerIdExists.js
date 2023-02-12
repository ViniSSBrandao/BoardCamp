import db from "../../config/database/databaseConnection.js";

export async function customerIdExistsMiddleware(req, res, next){

const { customerId } = req.body
console.log(req.body)

try{
    const customer = await db.query(`SELECT * FROM customers WHERE id = $1;`, [customerId])
    console.log(customer.rowCount)
    if(!customer.rowCount){
        return res.sendStatus(409)
    }
    return res.sendStatus(200)
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}