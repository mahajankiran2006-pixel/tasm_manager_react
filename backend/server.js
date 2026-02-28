import express from "express"
const app = express()
import connectToDb from './lib/ConnectToDb.js'
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()
import TaskRoutes from "./Routes/Task.route.js"


app.listen(process.env.PORT || 3002, () => { console.log("Server is Running on Port:", process.env.PORT), connectToDb() }
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(cookieParser())

app.use("/", TaskRoutes)
