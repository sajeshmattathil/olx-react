import React,{useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Store/FirebaseContext';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from  'react-router-dom'


export default function Signup() {
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [phone,setPhone] = useState('')
const [password,setPassword] = useState('')

const {firestore,auth,Collection,AddDoc}= useContext(FirebaseContext)
const navigate = useNavigate()

const handleSubmit =async (e)=>{
e.preventDefault()
try{
  createUserWithEmailAndPassword(auth,email,password).then((result)=>{
   console.log(result.user.uid)
    result.user.displayName = username 
    console.log( result.user.displayName,"create")
   return result

  }).then((result)=>{
         AddDoc(Collection(firestore,'users'),{
          id:result.user.uid,
          username:username,
          phone:phone,
          password:password
        })
  }).then(()=>{navigate('/login')})
  
}catch(err){console.log(err.message)}

}


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
          value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
