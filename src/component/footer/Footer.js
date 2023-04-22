import React from "react"
import "./footer.css"
import logo from "./logo-footer.png"

function Footer() {
    return<>
    <img src={logo} alt="Footer logo" className="logo-img"></img>
    <p className="copyright">Copyright text will come here</p>
    </>
}

export default Footer