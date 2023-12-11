import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FirebaseContext} from './Store/FirebaseContext'
import firebase,{ firestore,auth ,Collection,AddDoc,signIn,signout,storage,Ref} from './firebase/config';
import Context from "./Store/FirebaseContext"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase,firestore,auth,Collection,AddDoc,signIn,signout,storage,Ref}}>
        <Context>
                  <App />   
        </Context>  
    </FirebaseContext.Provider>    
  </React.StrictMode>

   
);


