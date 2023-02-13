import dayjs from "dayjs"
import db from "../../config/database/databaseConnection.js"



export async function returnPost(req, res){
    const {id} = req.params
    try{
        const rentFind = await db.query(`SELECT * FROM rentals WHERE id = ${id}`) 
        const { rentDate, daysRented, originalPrice} = rentFind.rows[0]
        const pricePerDay = daysRented/originalPrice;
        console.log(rentFind.rows[0])
        
        const returnDate = dayjs(new Date()).format("YYYY-MM-DD");
        const delayedDaysMs = new Date(rentDate)- new Date(returnDate)
        const delayedDays = Math.floor(delayedDaysMs/1000/60/60/24)

        let delayFee = (delayedDays - daysRented) * 2 * pricePerDay;
        if(delayFee<0){ delayFee = 0 }
        console.log(pricePerDay)
        console.log(delayFee)
        const returnRentals = await db.query(`UPDATE rentals SET "returnDate"=$1,"delayFee"=$2 WHERE id=$3;`, [
            returnDate,
            delayFee,
            id])
        
        return res.status(200).send()
    }catch(error){
        return res.status(500).send(error.message)
    } 
}