import db from "../../config/database/databaseConnection.js"

export async function getRentals(req, res){
try {
    const rentals = await db.query("SELECT * FROM rentals")
    return res.send(rentals.rows)
} catch (error) {
    return res.status(500).send(error.message)
}
}