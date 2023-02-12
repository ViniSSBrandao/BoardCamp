import { Router } from "express";
import { customerCreate } from "../controllers/customers/customerCreate.js";
import { customerGet } from "../controllers/customers/customerGet.js";
import { customerGetById } from "../controllers/customers/customerGetId.js";

import { customerExistsMiddleware } from "../middlewares/customerMiddlewares/customerExistsMiddleware.js";
import { customerValidateMiddleware } from "../middlewares/customerMiddlewares/customerMiddleware.js";


const customerRouter = Router();

customerRouter.post("/customers", customerValidateMiddleware, customerExistsMiddleware, customerCreate);
customerRouter.get("/customers", customerGet);
customerRouter.get("/customers/:id", customerGetById);
customerRouter.put("/customers", customerValidateMiddleware, customerGet);


export default customerRouter;