import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

//app config
const app = express()
app.use(cors())
const port = process.env.PORT || 4000
await connectDB()
connectCloudinary()

//middlewares
app.use(express.json())

//API endpoints
app.use('/api/admin', adminRouter)


app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(port, ()=> console.log("Server Started", port))