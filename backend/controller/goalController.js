


const asyncHandler = require("express-async-handler")
// description: get goal  
// route: GET /api/goals/
//access: private




const getGoals = asyncHandler(async(req,res)=>{
    res.json({message: "get goals"})
})


// description: set goal
// route: POST /api/goals/
//access: private

const setGoals = asyncHandler(async(req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("input a text field")
  }
else{
  res.status(200).json({message: "Set goal"})  
}})


// description: update/edit goal
// route: UPDATE /api/goals/:id 
//access: private


const updateGoals = asyncHandler(async(req,res)=>{
    res.json({message: `update goals for ${req.params.id}`}) 
})

// description: delete goal
// route: DELETE /api/goals/
//access: private

const deleteGoals = asyncHandler(async(req,res)=>{
     res.json({message: `delete goals for ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}