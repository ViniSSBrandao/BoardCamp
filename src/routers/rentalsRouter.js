import { Router } from "express";
import { getRentals } from "../controllers/rentals/getRentalsController.js";
import { rentalPost } from "../controllers/rentals/postRentalController.js";
import { customerIdExistsMiddleware } from "../middlewares/rentalsMiddlewares/customerIdExists.js";
import { RentalPostValidateMiddleware } from "../middlewares/rentalsMiddlewares/PostRentalMiddleware.js";

const rentalRouter = Router();

rentalRouter.get("/rentals", getRentals);
rentalRouter.post("/rentals", RentalPostValidateMiddleware, customerIdExistsMiddleware, rentalPost)

export default rentalRouter;