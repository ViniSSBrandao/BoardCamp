import db from "../../config/database/databaseConnection.js";
export const deleteRental = async (req, res) => {
    const { id } = req.params;
  
    try {
      await db.query(`DELETE FROM rentals WHERE id=$1;`, [id]);
  
      res.sendStatus(200);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };