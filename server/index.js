
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import UsersRoutes from "./routes/UsersRoutes.js"


const app = express()

app.use(cors({
  origin:"*"
}))
const PORT = 5001
const CONNECTION_URL = "mongodb+srv://jerlly:123@cluster0.dwv7gyi.mongodb.net/?retryWrites=true&w=majority"



mongoose.connect(CONNECTION_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.use(express.json({limit:"500mb"}))
app.use(bodyParser.json({
  
  extended:true,
  limit:"600mb"

}))
app.use(bodyParser.urlencoded({
  
  extended:true,
  limit:"600mb"

}))

app.listen(PORT,()=>console.log(`running on port: ${PORT}`))



app.use("/users",UsersRoutes)

