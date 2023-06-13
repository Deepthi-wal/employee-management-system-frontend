import './Register.css'
import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Register = () => {
  let {register,handleSubmit,formState:{errors},reset}=useForm()
  let navigate=useNavigate()
  let [response,setResponse]=useState("")

  //on submission of form
  const onSubmit=async(userObj)=>{
    console.log(userObj)
    userObj.address={}
    userObj.address.street=userObj.street
    userObj.address.city=userObj.city
    userObj.address.state=userObj.state
    userObj.address.pincode=userObj.pincode
    delete userObj.street
    delete userObj.city
    delete userObj.state
    delete userObj.pincode
    console.log(userObj)
    try{
      // console.log(userObj)
      reset()
      //make http request
      let res=await axios.post("http://localhost:4000/employee/register",userObj);
      console.log(res)
      setResponse(res.data.message)
      console.log(response)
      if(res.data.message==="Employee registered successfully"){
        navigate("login")
      }
    }catch(err){
      //if error occurs
      console.log("error",err)
    }
  }

  return (
    <div className='bg'>
    <div className='register'>
      {
        response && <p className='fs-5 fw-bold text-white text-center mt-4'>{response}</p>
      }
      <form onSubmit={handleSubmit(onSubmit)} className="ps-5 pe-5 bg-light">
      <p className='fs-2 fw-bold register-text text-center'>Register</p>
        {/* firstName */}
        <div className="mb-4">
          <label htmlFor="firstName" className="form-label fw-bold">First Name</label>
          <input type="text" {...register('firstName', {required:" first name required",
          minLength:{value:4,message:" first name should have minimum 4 characters"},
          maxLength:{value:12,message:" first name can have maximum 12 characters"}
          })} className="form-control"
          placeholder='enter first name'></input>
          {/* validation error msg */}
          {errors.firstName && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.firstName?.message}</strong></p>}
        </div>

        {/* lastName */}
        <div className="mb-4">
          <label htmlFor="lastName" className="form-label fw-bold">Last Name</label>
          <input type="text" {...register('lastName', {required:" last name required",
          minLength:{value:4,message:" last name should have minimum 4 characters"},
          maxLength:{value:12,message:" last name can have maximum 12 characters"}
          })} className="form-control"
          placeholder='enter last name'></input>
          {/* validation error msg */}
          {errors.lastName && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.lastName?.message}</strong></p>}
        </div>

        {/* email */}
        <div className="mb-4">
          <label htmlFor="email" className="form-label fw-bold">Email</label>
          <input type="email" {...register('email', {required:" email required",
          pattern:{value:/^[a-zA-Z0-9._]+@westagilelabs\.com$/,message:" Only westagilelabs email is accepted"}
          })} className="form-control"
          placeholder='enter email'></input>
          {/* validation error msg */}
          {errors.email && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.email?.message}</strong></p>}
        </div>

        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="form-label fw-bold">Password</label>
          <input type="password" {...register('password', {required:" password required",
          minLength:{value:4,message:" password should have minimum 4 characters"},
          maxLength:{value:15,message:" password can have maximum 12 characters"}
          })} className="form-control"
          placeholder='enter password'></input>
          {/* validation error msg */}
          {errors.password && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.password?.message}</strong></p>}
        </div>

        {/* mobile number */}
        <div className="mb-4">
          <label htmlFor="mobile" className="form-label fw-bold">Mobile</label>
          <input type="number" {...register('mobile', {required:" mobile number required",
          min:{value:1000000000,message:" mobile number should be minimum 1000000000"},
          max:{value:9999999999,message:" mobile number can be maximum 9999999999"}
          })} className="form-control"
          placeholder='enter mobile number'></input>
          {/* validation error msg */}
          {errors.mobile && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.mobile?.message}</strong></p>}
        </div>

        {/* Address */}

        {/* street */}
        <div className="mb-4">
          <label htmlFor="street" className="form-label fw-bold">Street</label>
          <input type="text" {...register('street', {required:" street required"})} className="form-control"
          placeholder='enter street'></input>
          {/* validation error msg */}
          {errors.street && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.street?.message}</strong></p>}
        </div>

        {/* city */}
        <div className="mb-4">
          <label htmlFor="city" className="form-label fw-bold">City</label>
          <input type="text" {...register('city', {required:" city required"})} className="form-control"
          placeholder='enter city'></input>
          {/* validation error msg */}
          {errors.city && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.city?.message}</strong></p>}
        </div>

        {/* state */}
        <div className="mb-4">
          <label htmlFor="state" className="form-label fw-bold">State</label>
          <input type="text" {...register('state', {required:" state required"})} className="form-control"
          placeholder='enter state'></input>
          {/* validation error msg */}
          {errors.state && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.state?.message}</strong></p>}
        </div>

        {/* pincode */}
        <div className="mb-4">
          <label htmlFor="pincode" className="form-label fw-bold">Pincode</label>
          <input type="number" {...register('pincode', {required:" pincode required",
          min:{value:0o0,message:" pincode should be minimum 000000"},
          max:{value:999999,message:" pincode can be maximum 999999 "}
          })} className="form-control"
          placeholder='enter pincode'></input>
          {/* validation error msg */}
          {errors.pincode && <p className="text-danger"><strong>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
          {errors.pincode?.message}</strong></p>}
        </div>

        {/* submit button */}
        <div className='mb-4 mt-3'>
          <button type="submit" className="btn fw-bold d-block mx-auto text-white register-submit">submit &rarr; </button>
        </div>

        {/* navigate to login */}
        <div className='text-center'>
          <p>Already a member?</p>
          <NavLink to="login" className='fs-5'>Login</NavLink>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Register