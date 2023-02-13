import db from "../../config/database/databaseConnection.js"
import dayjs from "dayjs"

export async function rentalPost(req, res){
    const  {customerId,gameId,daysRented} = req.body
 
    try{
        const gameFind = await db.query(`SELECT * FROM games WHERE id = ${gameId}`) 
        const {pricePerDay, stockTotal} = gameFind.rows[0]
        const originalPrice = pricePerDay*daysRented;
        const rentDate = dayjs(new Date()).format("YYYY-MM-DD");
        

        const insertRentals = await db.query(`INSERT INTO rentals ("customerId","gameId","rentDate","daysRented","returnDate", "originalPrice", "delayFee") 
        VALUES ($1, $2,$3, $4, null, $5, null);`, [customerId, gameId, rentDate, daysRented, originalPrice]) 
        return res.sendStatus(201)
    }catch(error){
        return res.status(500).send(error.message)
    } 
}