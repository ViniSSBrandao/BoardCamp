import express from "express"
import cors from "cors"
import gameRouter from "./routers/gameRouters.js"
import costumerRouter from "./routers/costumerRouter.js"



const app = express()
app.use(express.json())
app.use(cors())

app.use([gameRouter, costumerRouter]) 

const PORT = 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})