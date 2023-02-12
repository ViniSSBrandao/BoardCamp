
export async function getRentals(req, res){
try {
    return res.sendStatus(2000)
} catch (error) {
    return res.status(500).send(error.message)
}
}