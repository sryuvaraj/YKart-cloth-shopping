import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({loginUsers}) => {

  const loginNavigate = useNavigate()

  const [loginData, setLoginData] = useState(
    {
      email:"",
      passowrd:""
    }
    )
  
  const loginHandleChange = (e) => {
    const {name,value} = e.target
    setLoginData({...loginData,[name]:value})
  }

  const handleClickLogin = (e) => {
    e.preventDefault()
    if(loginData.email.trim() != "" && loginData.passowrd.trim() != ""){
      const ind = loginUsers.findIndex(user => user.email === loginData.email)
      if(loginUsers.some(user => user.email === loginData.email)){
        if(loginData.passowrd === loginUsers[ind].confirmPassword){
          loginNavigate("/home")
        }
        else{
          alert("Invalid Credentials")
        }
      }
      else{
        alert("No user found")
      }
    }
    else{
      alert("Please Fill all the fields")
    }
  }
  const lableStyle = {
    fontSize:"18px",
    fontWeight:"700"
  }

  return (
    <>
    <div className='row' style={{display:"flex", alignItems:"center",height:"90vh"}}>
      <div className='col-md-4'></div>
        <div className='col-md-6'>
            <h1 className='mb-5' style={{color:"#260041"}}>Login</h1>
            <form onSubmit={handleClickLogin}>
              <div className=''>
                <label style={lableStyle}>Username :</label>
                <input className='form-control' onChange={loginHandleChange} type='email' placeholder='Enter you username' name='email' value={loginData.email} /><br/>
                <label style={lableStyle}>Password :</label>
                <input className='form-control' onChange={loginHandleChange} type='password' placeholder='Enter you password' name='passowrd' value={loginData.passowrd} /> <br/>
                <button className='btn btn-success' type='submit'>Login</button><span><p className='text-danger'>New User?<Link to="/register"> Click Here to Register</Link></p></span>
              </div>
            </form>
        </div>
        <div className='col-md-4'></div>
    </div>
    </>
  )
}

export default Login