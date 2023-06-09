const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")




const protect = asyncHandler(async(req, res, next)=>{
    let token;    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
            token = req.headers.authorization.split(' ')[1]
            //verify the code
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)

            //get user from token (token has id payload in it, we bring user data by id)
            req.user = await User.findById(decoded.id).select('-password')

            next()
        }catch(error){
        
            console.log(error)
            res.status(401)
            throw new Error('not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error("Not Authorized, no token")
    }

   
})
module.exports = {protect}