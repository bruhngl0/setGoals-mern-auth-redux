
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")




//  desc : Register new user
//  route: POST /api/users/
// access: public
const registerUser = asyncHandler(async(req,res)=>{
     

    // payload recieved, and destructured through req.body 
    const {name,  email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("fill all the inputs")
    }


    //checking if the user exists already
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error("user already exists")
    }


    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    //create user/register user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    //In JavaScript, when you have a variable with the same name as the property you 
    //want to assign it to, you can omit the explicit assignment and simply provide 
    //the variable name. The object will automatically create a property with the same name and 
    //assign the value from the corresponding variable.


    
    //checking if the user was created or not and returning some data
    if(user){
        res.status(201).json({
            name: user.name,
            email: user.email,
            _id: user.id
        })
    }
    else{
        res.sendStatus(400)
        throw new Error("invalid user data")
    }

  
})


//  desc : authenticate a user
//  route: POST /api/users/login
// access: public
const loginUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message : "login user"})
})


//  desc : get user data
//  route: GET /api/users/
// access: public
const getMe = asyncHandler(async(req,res)=>{
    res.status(200).json({message : " get data"})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}