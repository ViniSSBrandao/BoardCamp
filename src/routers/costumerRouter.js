import { Router } from "express";
import { costumerCreate } from "../controllers/costumers/costumerCreate.js";
import { costumerGet } from "../controllers/costumers/costumerGet.js";
import { costumerGetById } from "../controllers/costumers/costumerGetById.js";
import { costumerPostMiddleware } from "../middlewares/costumerMiddlewares/costumerMiddleware.js";


const costumerRouter = Router();

costumerRouter.post("/costumer", costumerPostMiddleware, costumerCreate);
costumerRouter.get("/costumer", costumerGet);
costumerRouter.get("/costumer/:id", costumerGetById);

export default costumerRouter;