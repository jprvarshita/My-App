import React from "react";
import ReservationTime from "./ReservationTime";
import ResrvationDataTable from "./ReservationDataTable";
import { Form, redirect } from "react-router-dom";
import './main/main.css'



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

        checkInputFieldsAndEnableSubmitButton();
    };

    const validateFirstName = () => {
        let firstNameValid = false

        if (document.getElementById("first-name").checkValidity()) {
            firstNameValid = true;
        } else {
            firstNameValid = false;
        }
        
        return firstNameValid;
    }

    const validateLastName = () => {
        let lastNameValid = false
        if (document.getElementById("last-name").checkValidity()) {
            lastNameValid = true;
        } else {
            lastNameValid = false;
        }

        return lastNameValid;
    }

    const validateReservationDate = () => {
        let resDateValid = false
        if (document.getElementById("res-date").checkValidity()) {
            resDateValid = true;
        } else {
            resDateValid = false;
        }

        return resDateValid


    }

    const validateReservationTime = () => {
        let resTimeValid = false;
        if (document.getElementById("res-time").checkValidity()) {
            resTimeValid = true;
        } else {
            resTimeValid = false;
        }

        return resTimeValid

    }

    const validateNumberOfGuests = () => {
        let guestsValid = false
        if (document.getElementById("guests").checkValidity()) {
            guestsValid = true;
        } else {
            guestsValid = false;
        }

        return guestsValid

    }

    const validateOccasion = () => {
        
        let occasionValid = false;
        if (document.getElementById("occasion").checkValidity()) {
            occasionValid = true;
        } else {
            occasionValid = false;
        }

        return occasionValid

    }

    const validateEmail = () => {
        let emailValid = false;
        if (document.getElementById("email").checkValidity()) {
            emailValid = true;
        } else {
            emailValid = false;
        }

        return emailValid
    }

    const validatePhone = () => {
        let phoneValid = false;
        if (document.getElementById("phone").checkValidity()) {
            phoneValid = true;
        } else {
            phoneValid = false;
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
                        <input  type="text" id="first-name" aria-label="first-name" name="firstName" value={reservationData.firstName}
                            onChange={onChangeHandler} required></input>

                        <label className="required" for="last-name"> Last Name: </label>
                        <input type="text" id="last-name" name="lastName" required
                                value={reservationData.lastName} onChange={onChangeHandler}></input>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="res-date">Choose date: </label>
                        <input type="date" id="res-date" aria-label="res-date" name="reservationDate" 
                                value={reservationData.reservationDate} onChange={onChangeHandler} required></input>

                        <label className="required" for="res-time"> Choose time: </label>
                        <select id="res-time" name="reservationTime" 
                            value={reservationData.reservationTime} onChange={onChangeHandler} required>
                            <option></option>
                            <ReservationTime availableTime={availableTime} 
                                             setAvailableTime={setAvailableTime}></ReservationTime>  
                  
                        </select>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="guests">Number of guests: </label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" name="numberOfGuests"
                            value={reservationData.numberOfGuests} onChange={onChangeHandler} required></input>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="occasion">Occasion: </label>
                        <select id="occasion" name="occasion" value={reservationData.occasion} onChange={onChangeHandler} required>
                            <option></option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="email">Email Address: </label>
                        <input type="email" id="email" name="email" required value={reservationData.email} onChange={onChangeHandler}></input>
                    </div>
                    <div className="reservation-div">
                        <label className="required" for="phone">Contact Number(xxx-xxx-xxxx): </label>
                        <input className="required" type="tel" id="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={reservationData.phone} onChange={onChangeHandler}></input>
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