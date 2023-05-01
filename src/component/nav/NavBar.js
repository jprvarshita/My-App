import React from "react"
import "./nav.css"
import { Link } from "react-router-dom";


function NavBar() {
    return <>
        <div className="nav">
            <nav>
                <ul className="nav-ul">
                    <li><Link to="/">Home</Link></li>                
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Reservation">Reservation</Link></li>                
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>                       
            </nav>
        </div>
    </>

}

export default NavBar