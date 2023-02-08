export async function gameGet(req, res){
    try{
        return res.sendStatus(200)
    }catch(error){
        return res.status(500).send(error.message)
    } 
}