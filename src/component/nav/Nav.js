import React from "react"
import "./nav.css"

function Nav() {
    return<>
    <p>This is a Nav Component</p>
    <ul className="nav-ul">
        <li><a href="">Home</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservation</a></li>
        <li><a href="">Contect</a></li>
    </ul>
    </>
}

export default Nav