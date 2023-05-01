import React from "react";
import './menuitem.css'

var menu_items = [
    {name:"Greek Salad", description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price:"$12.99"},
    {name:"Bruschetta", description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.", price:"$7.99"},
    {name:"Grilled Fish", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.", price:"$14.99"},
    {name:"Pasta", description:"Our pasta made of white or red sauces and herbs.", price:"$16.99"}
    ]


function MenuItem() {

    return <>
        <div className="menu">
            { 
                menu_items.map((item, index) =>(
                    <div key={index} className="menuItem">
                        <div className="item">{item.name}</div>
                        <div className="description">{item.description}</div>
                        <div className="price">{item.price}</div>
                    </div>
                ))
            }
        </div>
    </>
}

export default MenuItem