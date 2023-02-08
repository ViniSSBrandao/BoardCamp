import { Router } from "express";
import { costumerPostMiddleware } from "../middlewares/costumerMiddleware.js";


const costumerRouter = Router();

costumerRouter.post("/costumer", costumerPostMiddleware);

export default costumerRouter;