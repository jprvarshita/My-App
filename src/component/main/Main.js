import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import "../main/main.css"
import Header from "../header/Header";
import Home from "../Home";
import Menu from "../Menu";
import Reservation from "../Reservation";
import Contact from "../Contact";
import ConfirmedBooking from "../ConfirmedBooking";
import Footer from "../footer/Footer";
import { submitAPI } from '../../api/bookingAPI';


function Main({reservations, setResrvations, reservationData, setReservationData, availableTime, setAvailableTime}) {

    const navigate = useNavigate();

    // const submitForm = (form) => {  
    //   const submitSuccess = submitAPI(form)
    //   if (submitSuccess) {
    //     navigate("/BookingConfirmed");
    //   }
    // }

    const submitForm = (event) => {

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

          const submitSuccess = submitAPI(event.target)
          if (submitSuccess) {
            navigate("/BookingConfirmed");
          }
    }

    return <>
            
        <Header>  </Header>
                
        <Routes> 
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Menu" element={<Menu/>}></Route>
            <Route path="/Reservation" element={<Reservation 
                                                reservations={reservations}
                                                setResrvations={setResrvations}
                                                reservationData ={reservationData} 
                                                setReservationData={setReservationData} 
                                                availableTime={availableTime}
                                                setAvailableTime={setAvailableTime}
                                                submitForm={submitForm}/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/BookingConfirmed" element={<ConfirmedBooking/>}></Route>
        </Routes>
        
        <Footer> </Footer>
        
    </>
}

export default Main