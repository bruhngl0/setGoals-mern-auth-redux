const express = require ('express')
const dotenv = require('dotenv').config()
const app = express()
const goalRoutes = require("./routes/goalRoutes")
const userRoutes = require("./routes/userRoutes")
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const cors = require('cors')



PORT = process.env.PORT || 2121

connectDB()
app.use(express.json()) //body parser in order to handle the req.body data we gotta add couple for middlewares. this one os for raw json
app.use(express.urlencoded({extended: false})) //this one is for url 
app.use(cors())

app.use('/api/goals' ,  goalRoutes)
app.use('/api/users' , userRoutes)

app.use(errorHandler)


app.listen(PORT, ()=> (console.log(`server running on ${PORT}`)))