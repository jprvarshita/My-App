import LittleLemon from "./LittleLemon"
import BookingForm from "./BookingForm";


function Reservation({reservations, setResrvations, reservationData, setReservationData, availableTime, setAvailableTime, submitForm}) {
    


    return <>
        <div className="main"> 

            <LittleLemon></LittleLemon>

            <div>                
                 <BookingForm reservations={reservations} setResrvations={setResrvations}
                        reservationData={reservationData} setReservationData={setReservationData} 
                        availableTime={availableTime} setAvailableTime={setAvailableTime}
                        submitForm={submitForm}
                        ></BookingForm>               
            </div>
        </div>
    </>
}

export default Reservation