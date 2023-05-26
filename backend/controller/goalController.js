/*const getGoals = async(req,res)=>{
    let collection = await db.collection("list")
    let result = await collection.find({}).toArray()


    res.json(result).status(200)

}*/

// description: get goal  
// route: GET /api/goals/
//access: private


const getGoals = async(req,res)=>{
   await res.json({message: "get goals"})
}


// description: set goal
// route: POST /api/goals/
//access: private

const setGoals = async(req,res)=>{
  
  if (!req.body.text){
    res.status(400)
    throw new Error("please have a text field")
  }
  else{
    res.send(req.body.text)
  }
}



// description: update/edit goal
// route: UPDATE /api/goals/:id
//access: private


const updateGoals = async(req,res)=>{
   await res.json({message: `update goals for ${req.params.id}`})
}

// description: delete goal
// route: DELETE /api/goals/
//access: private

const deleteGoals = async(req,res)=>{
    await res.json({message: `delete goals for ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}