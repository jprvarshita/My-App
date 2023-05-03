import React from "react"
import LittleLemon from "./LittleLemon"
import MenuItem from "./MenuItem"

function Menu() {

    return <>
        <div className="main"> 

            <LittleLemon></LittleLemon>

            <div>
               <MenuItem></MenuItem>               
            </div>
        </div>
    </>
}

export default Menu