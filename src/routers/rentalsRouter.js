import { Router } from "express";
import { getRentals } from "../controllers/rentals/getRentalsController.js";
import { rentalPost } from "../controllers/rentals/postRentalController.js";
import { returnPost } from "../controllers/rentals/postReturnController.js";
import { customerIdExistsMiddleware } from "../middlewares/rentalsMiddlewares/customerIdExists.js";
import { gameAvailableMiddleware } from "../middlewares/rentalsMiddlewares/gameAvailable.js";
import { RentalPostValidateMiddleware } from "../middlewares/rentalsMiddlewares/PostRentalMiddleware.js";
import { rentalExistsMiddleware } from "../middlewares/rentalsMiddlewares/returnMiddleware.js";

const rentalRouter = Router();

rentalRouter.get("/rentals", getRentals);
rentalRouter.post("/rentals", RentalPostValidateMiddleware,
 customerIdExistsMiddleware, 
 gameAvailableMiddleware, 
 rentalPost)
rentalRouter.post("/rentals/:id/return", rentalExistsMiddleware, returnPost);

export default rentalRouter;