import { useState } from "react";
import {LOGO_URL} from "../utilities/constants"
import { Link } from "react-router";
 
const Header = () =>{

  const[onelogin, setonelogin] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
        <img className="logo"alt="error" src={LOGO_URL}/>
       </div>
       <div className="navbar-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Orders</li>
          <li>Offers</li>
          <button className="login" onClick={()=>{
            onelogin === "Login"?
            setonelogin("Logout")
            :setonelogin("Login")
          }}>
          {onelogin}
          </button>
        </ul>
       </div>
      </div>
    )
  };

  export default Header;