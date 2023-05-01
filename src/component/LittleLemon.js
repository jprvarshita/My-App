import React from "react";
import { useNavigate } from "react-router-dom";



function LittleLemon() {

    const navigate = useNavigate();

    const sendToBookingPage = ((props) => {
        navigate("/Reservation");
    });

  return<>
        <div className="main-contaniner">
            <div className="h1"><span>Little Lemon</span></div>
            <div className="h4"><span>Chicago</span></div>
            <div className="desc">
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <button className="button" onClick={sendToBookingPage}>Reserve a Table</button>
            </div>
        </div>

  </>

}
export default LittleLemon