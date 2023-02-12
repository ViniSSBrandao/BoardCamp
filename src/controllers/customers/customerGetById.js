

export async function customerGetById(req, res){

    try{
        res.sendStatus(200)
    }catch(error){
        return res.send(error.message).status(500)
    }

} 