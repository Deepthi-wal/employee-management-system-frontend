import React from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { userLogin } from '../../slices/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let {register,handleSubmit,formState:{errors},reset}=useForm()
  let dispatch=useDispatch()
  //get state from store
  let {userObj,errorMessage}= useSelector((state)=>state.login)
  let navigate=useNavigate()

  if(userObj.role==="Admin"){
    navigate("admin-dashboard")
  }

  //on submission of form
  const onSubmit=(userCredentials)=>{
    reset()
    console.log(userCredentials)
    let actionObj=userLogin(userCredentials)
    dispatch(actionObj)
  }

  return (
    <div className='bg'>
    <div className='login'>
      {/* error message */}
      {
        errorMessage && <p className='text-danger text-center fw-bold fs-4 error-text'>{errorMessage}</p>
      }

      <form onSubmit={handleSubmit(onSubmit)} className="p-5 bg-light" >
      <p className='fs-2 fw-bold login-text text-center'>Login</p>
      {/* email */}
      <div className="mb-4">
        <label htmlFor="email" className="form-label fw-bold">Email</label>
        <input type="email" {...register('email', {required:" email required"})} className="form-control"
        placeholder='name@westagilelabs.com'></input>
        {/* validation error msg */}
        {errors.email && <p className="text-danger"><strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
        {errors.email?.message}</strong></p>}
      </div>

      {/* password */}
      <div className="mb-4">
          <label htmlFor="password" className="form-label fw-bold">Password:</label>
          <input type="password" {...register('password', {required:" password required", 
          minLength:{value:4,message:"minimum length of password should be 4"},
          maxLength:{value:15,message:"maxmimum length of password should be 15"}  
        })} className="form-control"
          placeholder='enter password'></input>
          {/* validation error msg */}
          {errors.password && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.password?.message}</strong></p>}
        </div>
      
        {/* login button */}
        <div className='mb-4 mt-3'>
          <button type="submit" className="btn fw-bold d-block mx-auto login-submit text-white">Login &rarr;</button>
        </div>

        {/* navigate to register */}
        <div className='text-center'>
          <p>Don't have an account yet?</p>
          <NavLink to="register" className='fs-5'>Register</NavLink>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login