import React from "react";
import "./header.css"
import logo from "./logo-header.png"


function Header() {
    return <>
        <div>
            <div className="div-img">
                <img src={logo} alt="Logo" className="header-img"></img>
            </div>
            <div className="div-text">
                <p className="header-text">This is a Header Component!</p>
            </div>
        </div>

        
        
    </>
}

export default Header
