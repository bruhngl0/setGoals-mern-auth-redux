import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
//import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  //const navigate = useNavigate()
  //const dispatch = useDispatch()

  //const { user, isLoading, isError, isSuccess, message } = useSelector(
   // (state) => state.auth
  //)

 /* useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch]) */

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  } 

  const onSubmit = (e) => {
    e.preventDefault()

   /* if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    } */
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
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
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