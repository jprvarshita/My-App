import React from "react";
import "./header.css"
// import logo from "./logo-header.png"
import logo from "./logo.png"
import Navigation from "../nav/NavBar";
import { Router } from "react-router-dom";


function Header() {
    return <>
        <div className="header"> 
        <div>
            <div className="div-img">
                <img src={logo} alt="Logo" className="header-img"></img>
            </div>  
           
            <div>
                <Navigation></Navigation>
            </div>  
            </div>    
        </div>
       
    </>
}

export default Header
