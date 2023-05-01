
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Booking from './component/Reservation';
import Contact from './component/Contact';
import Menu from './component/Menu';


function App() {
  return (
      <div className='container'>
        <Router>
          <Header>  </Header>
                    
          <Routes> 
              <Route path="/" element={<Main/>}></Route>
              <Route path="/Menu" element={<Menu/>}></Route>
              <Route path="/Reservation" element={<Booking />}></Route>
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

