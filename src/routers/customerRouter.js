import { Router } from "express";
import { customerCreate } from "../controllers/customers/customerCreate.js";
import { customerGet } from "../controllers/customers/customerGet.js";
import { customerGetById } from "../controllers/customers/customerGetId.js";
import { customerPostMiddleware } from "../middlewares/customerMiddlewares/customerMiddleware.js";


const customerRouter = Router();

customerRouter.post("/customer", customerPostMiddleware, customerCreate);
customerRouter.get("/customer", customerGet);
customerRouter.get("/customer/:id", customerGetById);

export default customerRouter;