import React from "react";
import "./header.css"
import logo from "./logo-header.png"
import Navigation from "../nav/NavBar";
import { Router } from "react-router-dom";


function Header() {
    return <>
        <div className="header"> 
            <div className="div-img">
                <img src={logo} alt="Logo" className="header-img"></img>
            </div>  
           
            <div>
                <Navigation></Navigation>
            </div>  
                 
        </div>
       
    </>
}

export default Header
