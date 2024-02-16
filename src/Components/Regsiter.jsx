import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ loginUsers, setLoginUsers }) => {
  const loginNav = useNavigate()
  const [regData, setRegData] = useState({
    fName: "",
    lName: '',
    email: "",
    mobile: "",
    createPassword: "",
    confirmPassword: ""
  });

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if(regData.fName.trim() !== "" && regData.lName.trim() !== ""){
      if(regData.mobile.length !== 10){
        alert("Enter Porpper Mobile Number")
      }

      else if(regData.createPassword !== regData.confirmPassword){
        alert("Create Password and Confirm Password should be same")
      }

      else if(loginUsers.some(user => user.email === regData.email)){
        alert("This USer is already exists")
      }
      else{
        regData.id = loginUsers.length+1
        setLoginUsers([...loginUsers,regData])
        alert("User Registered Succesfully")
        loginNav("/login")
      }
    }
    else{
      alert("Please fill First Name and Last Name")
    }
  };

  const lableStyle = {
    fontSize:"18px",
    fontWeight:"700"
  }

  return (
    <>
    <h3 className="text-center pt-5" style={{color:"#260041"}}>Register</h3>
        <div className="row" style={{display:"flex", alignItems:"center",height:"70vh"}}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
          <form onSubmit={handleRegisterSubmit}>
            <div>
              <label style={lableStyle}>First Name :</label>
              <input required  className="form-control" onChange={handleRegChange} type="text" placeholder="Enter Your First Name" name="fName" value={regData.fName} /><br/>
            </div>
            <div>
              <label style={lableStyle}>Last Name :</label>
              <input required  className="form-control" onChange={handleRegChange}  type="text" placeholder="Enter Your Last Name" name="lName" value={regData.lName} /><br/>
            </div>
            <div>
              <label style={lableStyle}>Email :</label>
              <input required  className="form-control" onChange={handleRegChange}  type="email" placeholder="Enter Email ID" name="email" value={regData.email} /><br/>
            </div>
            <div>
              <label style={lableStyle}>Mobile :</label>
              <input required  className="form-control" onChange={handleRegChange}  type="number" placeholder="Enter Mobile Number" name="mobile" value={regData.mobile} /><br/>
            </div>
            <div>
              <label style={lableStyle}>Create Password :</label>
              <input required  className="form-control" onChange={handleRegChange}  type="password" placeholder="Create Password" name="createPassword" value={regData.createPassword} /><br/>
            </div>
            <div>
              <label style={lableStyle}>Confirm Password :</label>
              <input required  className="form-control" onChange={handleRegChange}  type="password" placeholder="Confirm Password" name="confirmPassword" value={regData.confirmPassword} /><br/>
            </div>
            <div style={{display:"flex"}}>          
            <button className="btn btn-success" type="submit">
              Register
            </button>
            <p className="text-danger m-2">
              Already Registered ? <Link to="/login">Login</Link>
            </p></div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
    </>
  );
};

export default Register;
