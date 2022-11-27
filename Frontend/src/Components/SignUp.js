import { React, useEffect, useState} from 'react'
import logo from '../Img/instagram.png';
import './SignUp.css';
import { Link } from 'react-router-dom'


function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const fetchData = async()=>{
  //   const response = await fetch("http://localhost:5000");
  //   const data = await response.json()
  //   console.log(data)
  // }

  // useEffect(()=>{
  //   fetchData()
  // }, [])

  return (
    <div className='signUp'>
      <div className="form-container">
        <div className="signUpForm">
          <img src={logo} alt="" className="signUpLogo" />
          <p className="loginPara">Sign up to see photos and videos <br /> from your friends </p>
          <div>
              <input type="email" name='email' id='email' placeholder='Email' />
          </div>
          <div>
              <input type="text" name='name' id='name' placeholder='Full Name' />
          </div>
          <div>
              <input type="text" name='username' id='username' placeholder='Username' />
          </div>
          <div>
              <input type="password" name='password' id='password' placeholder='Password' />
          </div>
          <p className="loginPara" style={{ fontSize: "12px", margin: "3px 0", lineHeight: "normal"}}>
              By signing up, you agree to our Terms,<br /> Privacy Policy and Cookies Policy.
          </p>
          <input type="submit" id='submit-btn' value='Sign Up' />
        </div>
        <div className="signUpForm2">
          Already have an account ?
          <Link to="/signin">
            <span style={{color:"blue", cursor:"pointer"}}> Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
