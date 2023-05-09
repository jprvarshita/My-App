import React from "react"
import specialPasta from "../images/special-pasta.png"
import specialPizza from "../images/special-pizza.png"
import specialFood from "../images/special-fast-food.jpg"


function Specials() {

    return <>
        <div className="special"> 
            <div>                                
                <div>
                    <h4>Our Specials</h4>   
                </div> 

                <div>
                    <img src={specialPasta} alt="Pasta" className="special-img"></img>
                </div>    

                <div>
                    <img src={specialPizza} alt="Pasta" className="special-img"></img>
                </div>   

                <div>
                    <img src={specialFood} alt="Pasta" className="special-img"></img>
                </div>  


            </div>
        </div>
    </>
}

export default Specials;