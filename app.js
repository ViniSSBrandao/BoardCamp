import express from "express"
import cors from "cors"
import gameRouter from "./routers/gameRouters/gameRouters.js"



const app = express()
app.use(express.json())
app.use(cors())

app.use([gameRouter]) 

const PORT = 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})