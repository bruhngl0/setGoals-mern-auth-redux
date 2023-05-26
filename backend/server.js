const express = require ('express')
const dotenv = require('dotenv').config()
const app = express()
const goalRoutes = require("./routes/goalRoutes")


PORT = process.env.PORT || 2121


app.use(express.json()) //body parser in order to handle the req.body data we gotta add couple for middlewares. this one os for raw json
app.use(express.urlencoded({extended: false})) //this one is for url 


app.use('/api/goals' ,  goalRoutes)


app.listen(PORT, ()=> (console.log(`server running on ${PORT}`)))