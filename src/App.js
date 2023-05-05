
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Reservation from './component/Reservation';
import Contact from './component/Contact';
import Menu from './component/Menu';
import { useReducer, useState } from 'react';
import { act } from 'react-dom/test-utils';

const initialState = [  "17:00",
                        "18:00",
                        "19:00",
                        "20:00",
                        "21:00",
                        "22:00"
                      ];

const initializeTimes = () => {
  //console.log("initializeTimes called...")
  return initialState;
};

const updateTimes = (availableTime, action) => {
  console.log("action == " + action); 
  console.log("newDate in App.js == " + action.payload)
  //Additional logic to change time will come here
  return availableTime;
};

function App() {

  const [reservationData, setReservationData] = useState({
    firstName : "",
    lastName : "",
    reservationDate : "",
    reservationDate : "",
    numberOfGuests : "",
    occasion : "",
    email : "",
    phone : ""
  });


  
const setAvailableTime = (value) => {
  dispatch({payload : value})
}

const [availableTime, dispatch] = useReducer(updateTimes, initialState, initializeTimes)

  return (
      <div className='container'>
        <Router>
          <Header>  </Header>
                   
          <Routes> 
              <Route path="/" element={<Main/>}></Route>
              <Route path="/Menu" element={<Menu/>}></Route>
              <Route path="/Reservation" element={<Reservation 
                                                    reservationData ={reservationData} 
                                                    setReservationData={setReservationData} 
                                                    availableTime={availableTime}
                                                    setAvailableTime={setAvailableTime}/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
          
          <Footer> </Footer>
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

