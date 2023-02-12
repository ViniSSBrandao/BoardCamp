
export async function costumerGetById(req, res){
    const { id } = req.params
    try{
        const costumer = db.query("SELECT * FROM costumers WHERE id = $1", [id])
        res.send(costumer)
    }catch(error){
        return res.send(error.message).status(500)
    }

} 