import React, { useEffect, useState } from "react";
import Reservation from "./Reservation";


const ReservationTime = ({availableTime, setAvailableTime}) => {
   

    return <>
        {
            availableTime.map((item,index) => (
                <option key={index}>{item}</option>
            ))
        }
    
    </>
}

export default ReservationTime


