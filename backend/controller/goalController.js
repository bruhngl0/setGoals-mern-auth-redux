


const asyncHandler = require("express-async-handler")

const Goal = require("../models/goalModel")



// description: get goal  
// route: GET /api/goals/
//access: private




const getGoals = asyncHandler(async(req,res)=>{

    const goals = await Goal.find()
    res.status(200).json(goals)
})


// description: set goal
// route: POST /api/goals/
//access: private

const setGoals = asyncHandler(async(req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("input a text field")
  }

  const goal = await Goal.create({
    text: req.body.text
  }) 

  res.status(200).json(goal)
})


// description: update/edit goal
// route: UPDATE /api/goals/:id 
//access: private


const updateGoals = asyncHandler(async(req,res)=>{

  const goal = await Goal.findById(req.params.id) // this id is gonna be in the url

  if(!goal){
    res.status(400)
    throw new Error("Goal not found")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    res.status(200).json(updatedGoal)
})

// description: delete goal
// route: DELETE /api/goals/
//access: private

const deleteGoals = asyncHandler(async(req,res)=>{

  const goal = await Goal.findById(req.params.id)

  if(!goal){ 
    res.status(400)
    throw new Error ("goal not found")
  }

   await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}