import React from 'react'
import{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import GoalForm from './GoalForm'
import Spinner from './Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import GoalItem from './GoalItem'

function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user}= useSelector((state)=> state.auth)
  const {goals, isLoading, isError, message} = useSelector((state)=> state.goals)


  useEffect(()=>{
    if(!user /* this user, is the user in state */){ 
      navigate('/login')
    }

    dispatch(getGoals())

    return ()=>{
      dispatch(reset())
    }
  },[user, navigate, dispatch, isError, message])

  if (isLoading) {
    return <Spinner />
  }

    return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard</p>
     
    </section>
    <GoalForm />

    <section className="content">
      {goals.length>0 ? (
        <div className="goals">
          {goals.map((goal)=> ( 
            <GoalItem 
            key = {goal._id}
            goal = {goal}
            />
          ))}
        </div>
      ) : (<h3>you have not set any goals yet</h3>)}
    </section>
    
    </>
  )
}

export default Dashboard
