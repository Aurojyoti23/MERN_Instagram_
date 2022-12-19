import { React, useState} from 'react'
import logo from '../Img/instagram.png';
import './SignUp.css';
import { Link ,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //Toast functions
  const notifyA = (msg)=> toast.error(msg)
  const notifyB = (msg)=> toast.success(msg)

  const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passValid = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

  const postData= ()=>{

    // CHECKING EMAIL
    if(!emailValid.test(email)) {
      notifyA("Invalid Email");
      return
    }else if(!passValid.test(password)){
      notifyA(`Password must contain 1. Atleast 8 characters> 2. Includes both lowercase and uppercase letters 3.Includes special characters like @,#,$,% etc..`);
      return
    }

    fetch("http://localhost:5000/signup", {
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        email:email,
        userName:userName,
        password:password
      })
    }).then(res=>res.json())
      .then(data => {
        if(data.error){
          notifyA(data.error)
        }
        else{
          notifyB(data.message)
          navigate("/signin")
        }
        console.log(data)
      })
  }

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
              <input type="email" name='email' id='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div>
              <input type="text" name='name' id='name' value={name} placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}} />
          </div>
          <div>
              <input type="text" name='username' id='username' value={userName} placeholder='Username' onChange={(e)=>{setUserName(e.target.value)}} />
          </div>
          <div>
              <input type="password" name='password' id='password' value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <p className="loginPara" style={{ fontSize: "12px", margin: "3px 0", lineHeight: "normal"}}>
              By signing up, you agree to our Terms,<br /> Privacy Policy and Cookies Policy.
          </p>
          <input type="submit" id='submit-btn' value='Sign Up' onClick={()=>{postData()}} />
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
