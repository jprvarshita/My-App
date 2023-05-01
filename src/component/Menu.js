import React from "react"
import LittleLemon from "./LittleLemon"
import MenuItem from "./MenuItem"

function Menu() {

    return <>
        <div className="main"> 

            <LittleLemon></LittleLemon>

            <div>
                <h4>Menu page will come here!</h4>
                <div></div> 
                <MenuItem></MenuItem>               
            </div>
        </div>
    </>
}

export default Menu