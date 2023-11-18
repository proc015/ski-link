import React from 'react'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/SkiLink_logo.png";
import { postRegister } from '../apiService';


const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const registerObj = { email, password };
    
    //Post register, change postlogin to postregister. first create in apiService.js
    const response = await postRegister(registerObj);

    if (!response.error) {
      localStorage.setItem('email',email)
      navigate("/");
    } else {
      alert("login failed");
      console.error("Login failed");
    }
  };


  return (
    <div className="customer-login-container">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <div className="login-image">
          <img src={logo} alt="SkiLink Logo" height={50} width={163}></img>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required={true}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required={true}
        />
        <button id="customer-login" type="submit">
        <Link to="/register">
            <button id="customer-login">Register</button>
          </Link>
        </button>
      </form>
      <div className="">
          
      </div>
    </div>
  )
}

export default Register
