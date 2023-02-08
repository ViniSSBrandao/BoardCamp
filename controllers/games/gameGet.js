export async function gameGet(req, res){
    try{
        res.sendStatus(200)
    }catch(error){
        return res.status(500).send(error.message)
    } 
}