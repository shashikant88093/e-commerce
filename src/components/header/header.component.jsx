import React from "react";
import { Link } from "react-router-dom";


//auth google
import {auth} from '../../firebase/firebase.utils'
//scss
import "./header.styles.scss";

const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <h1 className="logo">
        S<span style={{ color: "red" }}>K</span>
      </h1>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ? (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>) 
        : <Link className="option" to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
