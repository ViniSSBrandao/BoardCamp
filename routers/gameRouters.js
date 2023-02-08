import { Router } from "express";
import { gameGet } from "../controllers/games/gameGet.js";
import { gameMiddleware } from "../middlewares/gameMiddleware.js";


const gameRouter = Router();

gameRouter.post("/games", gameMiddleware)
gameRouter.get("/games", gameGet)

export default gameRouter