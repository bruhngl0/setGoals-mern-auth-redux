import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {

  const [ formData , setFormData ] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const {name, email, password, password2} = formData

    const onChange = (e) => {
      setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]: e.target.value
      }))   
      
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
    <div>
      <FaUser /> Register
    </div>
    <h1>Please create an account</h1>

    <form onChange={onSubmit}>

      <input
        type = "text"
        placeholder='name'
        id = 'name'
        name = 'name'
        value = {name}
        onChange={onChange}> 
      </input>
    
      <input
        type = "email"
        placeholder='email'
        id = 'email'
        name = 'email'
        value = {email}
        onChange={onChange}>    
      </input>

      <input
        type = "password"
        placeholder='password'
        id = 'password'
        name= 'password'
        value = {password}
        onChange={onChange}>    
      </input>

      <input
        type = "password"
        placeholder='confirm password'
        id = 'password2'
        name = 'password2'
        value = {password2}
        onChange={onChange}>    
      </input>

      <button type = "submit">
        Submit
      </button>

    </form>

    
    </>
  )
}

export default Register
