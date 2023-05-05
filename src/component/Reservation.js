import React, { useState } from "react"
import LittleLemon from "./LittleLemon"
import ReservationTime from "./ReservationTime";
import BookingForm from "./BookingForm";


function Reservation({reservationData, setReservationData, availableTime, setAvailableTime}) {
    


    return <>
        <div className="main"> 

            <LittleLemon></LittleLemon>

            <div>
               <BookingForm reservationData={reservationData} setReservationData={setReservationData} 
                        availableTime={availableTime} setAvailableTime={setAvailableTime}
                        ></BookingForm>               
            </div>
        </div>
    </>
}

export default Reservation