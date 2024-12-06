import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Courses from "./components/Courses/Courses.jsx";
import SelfLearning from './components/Selflearning/SelfLearning.jsx';
import Careers from './components/Careers/Careers.jsx';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Navbar with links */}
      <Routes>  {/* Replace Switch with Routes */}
        <Route path="/drona_learning" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/selflearning" element={<SelfLearning />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default App;