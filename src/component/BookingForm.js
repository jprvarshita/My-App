import React from "react";
import ReservationTime from "./ReservationTime";
import ResrvationDataTable from "./ReservationDataTable";
import { Form, redirect } from "react-router-dom";
import './main/main.css'



function BookingForm({reservations, setResrvations, reservationData, setReservationData, availableTime, setAvailableTime, submitForm}) {
  
    const onChangeHandler = (event) => {

        setReservationData({
            ...reservationData,
            [event.target.name] : event.target.value
        });

        if (event.target.name === "reservationDate") {
            const newDate = event.target.value
            setAvailableTime(newDate)
        }

        checkInputFieldsAndEnableSubmitButton();
    };

    const validateFirstName = () => {
        let firstNameValid = false

        let span = document.getElementById("first-name-span");
        if (document.getElementById("first-name").checkValidity()) {
            firstNameValid = true;
            span.innerHTML="";
        } else {
            firstNameValid = false;
            span.innerHTML="Not valid input First Name.";
        }
        
        
        return firstNameValid;
    }

    const validateLastName = () => {
        let lastNameValid = false

        let span = document.getElementById("last-name-span");
        if (document.getElementById("last-name").checkValidity()) {
            lastNameValid = true;
            span.innerHTML="";
        } else {
            lastNameValid = false;
            span.innerHTML="Not valid input Last Name.";
        }

        return lastNameValid;
    }

    const validateReservationDate = () => {
        let resDateValid = false

        let span = document.getElementById("res-date-span");
        if (document.getElementById("res-date").checkValidity()) {
            resDateValid = true;
            span.innerHTML="";
        } else {
            resDateValid = false;
            span.innerHTML="Not valid input Reservation Date.";
        }

        return resDateValid


    }

    const validateReservationTime = () => {
        let resTimeValid = false;

        let span = document.getElementById("res-time-span");
        if (document.getElementById("res-time").checkValidity()) {
            resTimeValid = true;
            span.innerHTML="";
        } else {
            resTimeValid = false;
            span.innerHTML="Not valid input Reservation Time.";
        }

        return resTimeValid

    }

    const validateNumberOfGuests = () => {
        let guestsValid = false

        let span = document.getElementById("guests-span");
        if (document.getElementById("guests").checkValidity()) {
            guestsValid = true;
            span.innerHTML="";
        } else {
            guestsValid = false;
            span.innerHTML="Not valid input Number Of  Guests.";
        }

        return guestsValid

    }

    const validateOccasion = () => {
        
        let occasionValid = false;

        let span = document.getElementById("occasion-span");
        if (document.getElementById("occasion").checkValidity()) {
            occasionValid = true;
            span.innerHTML="";
        } else {
            occasionValid = false;
            span.innerHTML="Not valid input Occasion.";
        }

        return occasionValid

    }

    const validateEmail = () => {
        let emailValid = false;

        let span = document.getElementById("email-span");
        if (document.getElementById("email").checkValidity()) {
            emailValid = true;
            span.innerHTML="";
        } else {
            emailValid = false;
            span.innerHTML="Not valid input Email.";
        }

        return emailValid
    }

    const validatePhone = () => {
        let phoneValid = false;

        let span = document.getElementById("phone-span");
        if (document.getElementById("phone").checkValidity()) {
            phoneValid = true;
            span.innerHTML="";
        } else {
            phoneValid = false;
            span.innerHTML="Not valid input Phone. Valid format is xxx-xxx-xxxx";
        }

        return phoneValid
    }


    const checkInputFieldsAndEnableSubmitButton = () => {
        
        if (validateFirstName() & validateLastName() & validateReservationDate() 
            & validateReservationTime() & validateNumberOfGuests() & validateOccasion()
            & validateEmail() & validatePhone()) {
            //console.log(document.getElementById("reservation"));
            document.getElementById("reservation").removeAttribute("disabled")
        } else {
            document.getElementById("reservation").disabled = true
        }
        
    }
    
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
                        <label className="required" for="first-name">First Name: </label>
                        <input  type="text" id="first-name" aria-label="On Click" name="firstName" value={reservationData.firstName}
                            onChange={onChangeHandler} onBlur={validateFirstName} required></input>
                        <span title="first-name-span" id="first-name-span"></span>
                    </div>

                    <div className="reservation-div">
                        <label className="required" for="last-name"> Last Name: </label>
                        <input type="text" id="last-name" name="lastName" required aria-label="On Click"
                                value={reservationData.lastName} onChange={onChangeHandler} onBlur={validateLastName}></input>
                        <span title="last-name-span" id="last-name-span"></span>
                    </div>


                    <div className="reservation-div">
                        <label className="required" for="res-date">Reservation Date: </label>
                        <input type="date" id="res-date" aria-label="res-date" name="reservationDate" aria-label="On Click"
                                value={reservationData.reservationDate} onChange={onChangeHandler} onBlur={validateReservationDate} required></input>
                        <span title="res-date-span" id="res-date-span"></span>
                    </div>

                    <div className="reservation-div">
                        
                        <label className="required" for="res-time">Reservation Time: </label>
                        <select id="res-time" name="reservationTime" aria-label="On Click"
                            value={reservationData.reservationTime} onChange={onChangeHandler} onBlur={validateReservationTime} required>
                            <option></option>
                            <ReservationTime availableTime={availableTime} 
                                             setAvailableTime={setAvailableTime}></ReservationTime>  
                  
                        </select>
                        <span title="res-time-span" id="res-time-span"></span>

                    </div>
                    <div className="reservation-div">
                        <label className="required" for="guests">Number of Guests: </label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" name="numberOfGuests" aria-label="On Click"
                            value={reservationData.numberOfGuests} onChange={onChangeHandler} onBlur={validateNumberOfGuests} required></input>
                        <span title="guests-span" id="guests-span"></span>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="occasion">Occasion: </label>
                        <select id="occasion" name="occasion" value={reservationData.occasion} aria-label="On Click"
                            onChange={onChangeHandler} onBlur={validateOccasion} required>
                            <option></option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <span title="occasion-span" id="occasion-span"></span>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="email">Email Address: </label>
                        <input type="email" id="email" name="email" required aria-label="On Click"
                            value={reservationData.email} onChange={onChangeHandler} onBlur={validateEmail}></input>
                        <span title="email-span" id="email-span"></span>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="phone">Contact Number: </label>
                        <input className="required" type="tel" id="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={reservationData.phone} onChange={onChangeHandler} onBlur={validatePhone} 
                            aria-label="On Click"></input>
                        <span title="phone-span" id="phone-span"></span>
                    </div>
                    <div className="reservation-div">
                        <button className="button" type="submit" id="reservation" name="reservation" 
                            disabled>Make Your reservation</button>
                    </div>
                </div>
                </form>

                <ResrvationDataTable reservations={reservations}></ResrvationDataTable>
                

    </>
}

export default BookingForm