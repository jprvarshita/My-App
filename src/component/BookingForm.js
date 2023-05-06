import React from "react";
import ReservationTime from "./ReservationTime";
import ResrvationDataTable from "./ReservationDataTable";
import { Form } from "react-router-dom";



function BookingForm({reservations, setResrvations, reservationData, setReservationData, availableTime, setAvailableTime, submitForm}) {
  
    const onChangeHandler = (event) => {
        //alert(event.target.name)

        setReservationData({
            ...reservationData,
            [event.target.name] : event.target.value
        });

        //console.log(event.target.name);
        //console.log(event.target.value);

        if (event.target.name === "reservationDate") {
            const newDate = event.target.value
            setAvailableTime(newDate)
        }
    };
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        //console.log(reservationData)
        reservations.push(reservationData)
        setResrvations(reservations)
        //console.log(reservations)
        setReservationData({
            firstName : "",
            lastName : "",
            reservationDate : "",
            reservationTime : "",
            numberOfGuests : "",
            occasion : "",
            email : "",
            phone : ""
          })

          submitForm(Form[0])
    }

    return<>
        <form name="bookingForm" onSubmit={onSubmitHandler}>
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

                        <label for="res-time"> Choose time: </label>
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
                            <option>Select</option>
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

                <ResrvationDataTable reservations={reservations}></ResrvationDataTable>
                

    </>
}

export default BookingForm