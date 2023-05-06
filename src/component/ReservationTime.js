import React from "react";


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


