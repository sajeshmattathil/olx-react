import React,{useContext} from 'react';
import {AuthContext} from '../../Store/FirebaseContext';
import { FirebaseContext } from '../../Store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

function Header() {

  const {user} = useContext(AuthContext)
  const {auth,signout} = useContext(FirebaseContext)
  const navigate = useNavigate()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>{
            if(!user) navigate('/login')
          }} >{user ? `Welcome ${user.displayName}`:'Login'}</span>
          <hr />
        </div>
        { user && <span onClick={()=>{
          signout(auth)
          navigate('/login')
          }} >Log Out</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
