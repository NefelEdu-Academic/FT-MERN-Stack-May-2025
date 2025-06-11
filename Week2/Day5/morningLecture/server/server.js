import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./config/mongoose.config.js"
import router from "./routes/movie.route.js"

const app =express()
app.use(express.json(), cors())

dotenv.config()
dbConnect()

app.use("/api",router)

const PORT = process.env.PORT
app.listen(PORT,()=> console.log(`Server running on ${PORT}`))