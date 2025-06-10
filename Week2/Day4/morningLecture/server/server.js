import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./config/mongoose.config.js"
import router from "./routes/movie.route.js"

// create an instance for my app
const app =express()
// middleware 
app.use(express.json(), cors())
// for app configuration
dotenv.config()
dbConnect()

app.use("/api", router)
// use variables from .env file
const PORT = process.env.PORT

app.listen(PORT, ()=>console.log(`Server App running on ${PORT}`)
)