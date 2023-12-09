import './App.css';
import {useState} from 'react'
import { useNavigate,Routes,Route } from 'react-router-dom';
import About from './Components/About'
import Home from './Components/Home'
import { AppContext } from './AppContext';

function App() {
  const [state,setState] = useState(50)
const navigate = useNavigate()
  return (
    <div className="">
     <button onClick={()=>{navigate('/home')}}>Home</button>
     <button onClick={()=>{navigate('/about')}}>About</button>
     
      <AppContext.Provider value={{data:state}}>
          <Routes>
            <Route path='/home' element={  <Home/>} >
            
            </Route>
          <Route  path='/about' element={   <About />} >
           
          </Route>
          </Routes>
      </AppContext.Provider>
     
    
    </div>
  );
}

export default App;
