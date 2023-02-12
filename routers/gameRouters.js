import { Router } from "express";
import { gameGet } from "../controllers/games/gameGet.js";
import { gamePost } from "../controllers/games/gamePost.js";
import { gameExists, gameMiddleware } from "../middlewares/gameMiddleware.js";


const gameRouter = Router();

gameRouter.post("/games", gameMiddleware, gameExists, gamePost)
gameRouter.get("/games", gameGet)

export default gameRouter