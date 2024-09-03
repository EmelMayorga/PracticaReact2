import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import AboutUs  from '../Pages/AboutUs';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/Contact" element={<Contact />} />
     </Routes>
    </Router>
   );
};

export default Routing;