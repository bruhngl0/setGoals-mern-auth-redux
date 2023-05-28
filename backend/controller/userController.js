
const registerUser = (req,res)=>{
    res.status(200).json({message: "register user"})
}

const loginUser = (req,res)=>{
    res.status(200).json({message : "login user"})
}

const getMe = (req,res)=>{
    res.status(200).json({message : " get data"})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}