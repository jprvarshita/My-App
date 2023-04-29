import React from "react"
import "./footer.css"
import logo from "./logo-footer.png"

function Footer() {
    return <>
        <div className="footer">
            <div>
                <div><img src={logo} alt="Footer logo" className="logo-img"></img></div>
                <div className="copyright"><span>Copyright text will come here</span></div>
            </div>
            
            
        </div>
    </>
}

export default Footer