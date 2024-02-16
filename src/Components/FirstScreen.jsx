import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const FirstScreen = () => {
    const loginNavigate = useNavigate()
    const registerNavigate = useNavigate()
    const bgStyle = {
        height:"100vh",
        backgroundImage:'url("https://images.unsplash.com/photo-1707338252277-3f66895b0532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize:"cover",
        backgroundRepeat:"norepear",
        
    }
  return (
    <>
      <div>
        <div className="text-center d-flex justify-content-center align-items-center" style={bgStyle}>
          <div>
            <h1 className="text-warning">Welcome to Our YKart</h1>
            <p className="text-light" style={{fontSize:"75px",fontWeight:"700"}}>Let's Shop Your Products Here</p>
            <Link onClick={() => loginNavigate("login")} to="login"><button className="btn btn-primary mx-3">Login</button></Link>
            <Link onClick={() => registerNavigate("register")} to="register"><button className="btn btn-success">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstScreen;
