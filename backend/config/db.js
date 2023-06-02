const mongoose = require("mongoose")

//all the responses from mongoose is a promise, so thats why we use async await.

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.ATLAS_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
     
    }catch(error) {
        console.log(error)
        process.exit(1)
    }
    
}

module.exports = connectDB