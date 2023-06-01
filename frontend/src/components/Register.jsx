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
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>
    
    <section className='form'>
      <form onChange={onSubmit}>

      <div className='form-group'>
        <input
          type = "text"
          placeholder='name'
          id = 'name'
          name = 'name'
          value = {name}
          onChange={onChange}> 
        </input>
      </div>


      <div className='form-group'>  
        <input
          type = "email"
          placeholder='email'
          id = 'email'
          name = 'email'
          value = {email}
          onChange={onChange}>    
        </input>
      </div>

      <div className='form-group'>
        <input
          type = "password"
          placeholder='password'
          id = 'password'
          name= 'password'
          value = {password}
          onChange={onChange}>    
        </input>
      </div>


      <div className='form-group'>
        <input
          type = "password"
          placeholder='confirm password'
          id = 'password2'
          name = 'password2'
          value = {password2}
          onChange={onChange}>    
        </input>
      </div>

      <div className='form-group'>
        <button type = "submit" className='btn btn-block'>
          Submit
        </button>
      </div>
    </form>
  </section>
    
    </>
  )
}

export default Register


{/* Certainly! Computed property names in JavaScript object literals allow you to dynamically set the property names of an object using an expression.
 Instead of specifying a static property name, you can use a variable or an expression enclosed in square brackets ([]) as the property key.

Here's a simple example to illustrate computed property names:

javascript

const key = 'dynamicKey';
const value = 'some value';

const obj = {
  [key]: value,
};

console.log(obj); // { dynamicKey: 'some value' }

In this example, the obj object has a property with a computed property name [key]. 
The value of the key variable is used as the property key. When the object is created, the expression within the square brackets ([key]) is evaluated, resulting in the property key being set to 'dynamicKey'. The corresponding value is set to 'some value'.

Computed property names are particularly useful when you need to dynamically generate object properties based on runtime values or expressions.
 This allows for more flexibility and dynamic behavior in object construction.

In the specific case of the code snippet you provided, computed property names are used to update the formData state object based on the name property
 of the target input field. By using [e.target.name] as the key, the corresponding property in the formData object is dynamically updated with the value of e.target.value.

Remember that computed property names can be used in other scenari  





In the provided code snippet, (e) is an event object that represents the event triggered by a user action, such as a change event on an input field. The e argument is commonly used as a shorthand for the event object.

When an event occurs, such as a change event on an input field, React automatically passes the corresponding event object to the event handler function.
This event object contains information about the event itself, including the target element that triggered the event and any additional data associated with the event.*/}