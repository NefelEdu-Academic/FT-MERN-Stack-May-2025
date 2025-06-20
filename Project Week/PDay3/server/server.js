import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/mongoose.config.js"
import router from "./routes/task.route.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api", router)

connectDB()

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    
})