import React from "react";
import { useState } from "react";
import ReservationTime from "./ReservationTime";



function BookingForm({reservationData, setReservationData, availableTime, setAvailableTime}) {
  
    const onChangeHandler = (event) => {
        //alert(event.target.name)

        setReservationData({
            ...reservationData,
            [event.target.name] : event.target.value
        });

        console.log(event.target.name);
        console.log(event.target.value);

        if (event.target.name === "reservationDate") {
            const newDate = event.target.value
            setAvailableTime(newDate)
        }
    };
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert(reservationData)
    }

    return<>
        <form onSubmit={onSubmitHandler}>
                <div >
                    <div className="reservation-div">
                        <label for="first-name">First Name: </label>
                        <input type="text" id="first-name" name="firstName" value={reservationData.firstName}
                            onChange={onChangeHandler}></input>

                        <label for="last-name"> Last Name: </label>
                        <input type="text" id="last-name" name="lastName" value={reservationData.lastName} onChange={onChangeHandler}></input>
                    </div>
                    <div className="reservation-div">
                        <label for="res-date">Choose date: </label>
                        <input type="date" id="res-date" name="reservationDate" 
                                value={reservationData.reservationDate} onChange={onChangeHandler} ></input>
                    </div>
                    <div className="reservation-div">
                        <label for="res-time">Choose time: </label>
                        <select id="res-time" name="reservationTime" 
                            value={reservationData.reservationTime} onChange={onChangeHandler}>

                            <ReservationTime availableTime={availableTime} 
                                             setAvailableTime={setAvailableTime}></ReservationTime>  
                  
                        </select>
                    </div>
                    <div className="reservation-div">
                        <label for="guests">Number of guests: </label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" name="numberOfGuests"
                            value={reservationData.numberOfGuests} onChange={onChangeHandler}></input>
                    </div>
                    <div className="reservation-div">
                        <label for="occasion">Occasion: </label>
                        <select id="occasion" name="occasion" value={reservationData.occasion} onChange={onChangeHandler}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div className="reservation-div">
                        <label for="email">Email Address: </label>
                        <input type="email" id="email" name="email" value={reservationData.email} onChange={onChangeHandler}></input>
                    </div>
                    <div className="reservation-div">
                        <label for="phone">Contact Number: </label>
                        <input type="phone" id="phone" name="phone" value={reservationData.phone}onChange={onChangeHandler}></input>
                    </div>
                    <div className="reservation-div">
                        <button className="button" type="submit" >Make Your reservation</button>
                    </div>
                </div>
                </form>


    </>
}

export default BookingForm