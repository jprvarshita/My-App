import React from "react";


const ResrvationDataTable = ({reservations}) => {

    return <>
            <div className="reservation-div">
                <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>no. of Guests</th>
                    <th>Occasion</th>
                    <th>Email</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                    {
                        reservations.map((reservation, index) => (
                            <tr>
                                <td>{reservation.firstName}</td>
                                <td>{reservation.lastName}</td>
                                <td>{reservation.reservationDate}</td>
                                <td>{reservation.reservationTime}</td>
                                <td>{reservation.occasion}</td>
                                <td>{reservation.numberOfGuests}</td>
                                <td>{reservation.email}</td>
                                <td>{reservation.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </div>
    </>
}

export default ResrvationDataTable
