import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContext } from './Store/FirebaseContext';
import { auth, onAuthState } from './firebase/config';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Components/Login/Login';
function App() {

  const { user, setUser } = useContext(AuthContext)

  useEffect(() => {
    onAuthState(auth, (user) => {
      setUser(user)
    })

  })
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>

          </Route>
          <Route path='/signup' element={<Signup />} />

          <Route path='/login' element={<Login />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
