import React from "react";
import "./header.css"
import logo from "./logo-header.png"
import Nav from "../nav/Nav";


function Header() {
    return <>
        <div className="header"> 
            <div className="div-img">
                <img src={logo} alt="Logo" className="header-img"></img>
            </div>   
            <div>
                <Nav></Nav>
            </div>        
        </div>
       
    </>
}

export default Header
