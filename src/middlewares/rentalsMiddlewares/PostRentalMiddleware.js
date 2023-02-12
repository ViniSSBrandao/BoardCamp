import { rentalSchema } from "../../model/schemas/rentalSchema.js"; 

export async function RentalPostValidateMiddleware(req, res, next){
const { customerId, gameId, daysRented } = req.body

try{
    const {error} = rentalSchema.validate({ customerId, gameId, daysRented }, {abortEarly: false})
    if(error){
        res.status(400).send(error.message)
    }
    
    next();
}catch(error){
    return res.status(500).send(error.message)
}

}