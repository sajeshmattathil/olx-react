import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContext } from './Store/FirebaseContext';
import { auth, onAuthState } from './firebase/config';
import Post from './Store/postContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Components/Login/Login';
import Create from './Components/Create/Create'
import View from './Components/View/View'
function App() {

  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    onAuthState(auth, (user) => {
      setUser(user)
    })

  })
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/view' element={<View/>} />
          </Routes>
        </Router>
      </Post>
      
    </div>
  );
}

export default App;
