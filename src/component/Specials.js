import React from "react"
import specialImage from "../images/special-pasta.png"


function Specials() {

    return <>
        <div className="special"> 
            <div>                                
                <div>
                    <span>Specials page will come here!</span>    
                </div> 

                <div>
                    <img src={specialImage} alt="Pasta" className="special-img"></img>
                </div>               
            </div>
        </div>
    </>
}

export default Specials;