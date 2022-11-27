import React from 'react';
import logo from '../Img/instagram.png';
import './SignIn.css';
import {Link} from 'react-router-dom'

function SignIn() {
  return (
    <div className='signIn'>
      <div className="form-container">
        <div className="logInForm">
          <img src={logo} alt="" className="signUpLogo" />
          <div>
            <input type="email" id='email' placeholder='Email' />
          </div>
          <div>
            <input type="password" id='password' placeholder='Password' />
          </div>
          <input type="submit" id='login-btn' value="Sign In" />
        </div>
        <div className="logInForm2">
          Don't have an account ?
          <Link to='/signup'>
            <span style={{color:"blue", cursor:"pointer", fontSize:'15px'}}> Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
