
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Main from './component/main/Main';
import { useEffect, useReducer, useState } from 'react';
import { fetchAPI } from './api/bookingAPI';


const initialState = [  "17:00",
                        "18:00",
                        "19:00",
                        "20:00",
                        "21:00",
                        "22:00"
                      ];


export const initializeTimes = () => {
  //console.log("initializeTimes called...")

  const todayDate = new Date()
  console.log("todayDate == " + todayDate)
  console.log("todayDate.getDate() == " + todayDate.getDate())
  const newAvailableTime = fetchAPI(todayDate)
  console.log(newAvailableTime)

  return newAvailableTime;
};

const updateTimes = (availableTime, action) => {
  console.log("action == " + action); 
  console.log("newDate in App.js == " + action.payload)
  //Additional logic to change time will come here
  //const newAvailableTime = availableTime;
  const userSelectedDate = new Date(action.payload);
  const newAvailableTime = fetchAPI(userSelectedDate)
  console.log(newAvailableTime)

  return newAvailableTime;
};

function App() {

  useEffect(() => {
    initializeTimes()
  }, []) ;

  const [reservationData, setReservationData] = useState({
    firstName : "",
    lastName : "",
    reservationDate : "",
    reservationTime : "",
    numberOfGuests : "",
    occasion : "",
    email : "",
    phone : ""
  });

const [reservations, setResrvations] = useState([]);
  
const setAvailableTime = (value) => {
  dispatch({payload : value})
}

const [availableTime, dispatch] = useReducer(updateTimes, initialState)

  return (
      <div className='container'>
        <Router>
          <Main reservations={reservations}
                setResrvations={setResrvations}
                reservationData ={reservationData} 
                setReservationData={setReservationData} 
                availableTime={availableTime}
                setAvailableTime={setAvailableTime}>

            </Main>
         </Router>
      </div>
    
  );
}

export default App;



// import './App.css';
// import Footer from './component/footer/Footer';
// import Header from './component/header/Header';
// import Main from './component/main/Main';
// import Navigation from './component/nav/Navigation';
// import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
// import Home from "./component/Home";
// import Booking from "./component/Booking";

// function App() {
//   return (
//       <div className='container'>
//         <Router>
//           <nav>
//               <Link to="/">Home</Link>                
//               <Link to="/Menu">Menu</Link>
//               <Link to="/Reservation">Reservation</Link>                
//               <Link to="/Contact">Contact</Link>                    
//           </nav>
        

//           <Routes> 
//               <Route path="/" element={<Main/>}></Route>
//               <Route path="/booking" element={<Booking />}></Route>
//           </Routes>
//         </Router>
//       </div>
    
//   );
// }

// export default App;

