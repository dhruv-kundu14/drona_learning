
// import React from 'react';
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Home from "./components/Home/Home.jsx";
// import AboutUs from "./components/AboutUs/AboutUs.jsx";
// import Courses from "./components/Courses/Courses.jsx";
// import SelfLearning from './components/Selflearning/SelfLearning.jsx';
// import Careers from './components/Careers/Careers.jsx';
// import Contact from './components/Contact/Contact.jsx';
// import CourseCard from "./components/Courses/CourseCard.jsx"; 
// import CoursePage from "./Ecom/Aslp/ASLP.jsx";
// import ProductList from './Ecom/Card/ProductList.jsx';
// import ProductDetails from './Ecom/View/ViewDetail.jsx';
// import { products } from './Ecom/Card/data.js';
// import Nav2 from './Ecom/Navbar/Nav2.jsx';

// const App = () => {
//   return (
//     <Router>
//       <MainContent />
//     </Router>
//   );
// };

// // MainContent component to handle the conditional rendering
// const MainContent = () => {
//   // useLocation hook to get current route
//   const location = useLocation();

//   // Check if the pathname starts with "/course/"
//   const isCoursePage = location.pathname.startsWith("/course/");
//   const isProductPage = location.pathname.startsWith("/product/");

//   return (
//     <>
//       {/* Conditionally render Navbar or Nav2 based on the current route */}

//       {isProductPage || isCoursePage ? <Nav2 /> : <Navbar />}
//       <Routes>
//         <Route path="/drona_learning" element={<Home />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/home" element={<CourseCard />} />
//         <Route path="/course/:courseId" element={<CoursePage />} />
//         <Route path="/" element={<ProductList products={products} />} />
//         <Route path="/product/:productId" element={<ProductDetails />} />
//         <Route path="/selflearning" element={<SelfLearning />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// };

// export default App;


import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Courses from "./components/Courses/Courses.jsx";
import SelfLearning from './components/Selflearning/SelfLearning.jsx';
import Careers from './components/Careers/Careers.jsx';
import Contact from './components/Contact/Contact.jsx';
import CourseCard from "./components/Courses/CourseCard.jsx"; 
import CoursePage from "./Ecom/Aslp/ASLP.jsx";
import ProductList from './Ecom/Card/ProductList.jsx';
import ProductDetails from './Ecom/View/ViewDetail.jsx';
import { products } from './Ecom/Card/data.js';
import Nav2 from './Ecom/Navbar/Nav2.jsx';

// Import CartProvider
import { CartProvider } from './Ecom/Cart/CartContext.jsx'; // Adjust path accordingly
import CartDetail from './Ecom/Cart/CartDetail.jsx';  

const App = () => {
  return (
    <Router>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </Router>
  );
};

// MainContent component to handle the conditional rendering
const MainContent = () => {
  // useLocation hook to get current route
  const location = useLocation();

  // Check if the pathname starts with "/course/"
  const isCoursePage = location.pathname.startsWith("/course/");
  const isProductPage = location.pathname.startsWith("/product/");
  const isCartPage = location.pathname.startsWith("/cart")

  return (
    <>
      {/* Conditionally render Navbar or Nav2 based on the current route */}
      {isCartPage || isProductPage || isCoursePage ? <Nav2 /> : <Navbar />}
      <Routes>
        <Route path="/drona_learning" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/home" element={<CourseCard />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/selflearning" element={<SelfLearning />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
