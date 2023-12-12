import React,{useState,useContext,} from 'react';
import {FirebaseContext } from '../../Store/FirebaseContext'
import { useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const {firestore,auth,signIn} =useContext(FirebaseContext)
const navigate = useNavigate()

  const handleLogin = (e)=>{
    e.preventDefault()
    signIn(auth,email,password).then(()=>{navigate('/')}).catch((error)=>alert(error.message))
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
          onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            onChange={(e)=>setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={()=>navigate('/login')}>Login</button>
        </form>
        <a onClick={()=>navigate('/signUp')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
