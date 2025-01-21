
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
  // import Login from "./Ecom/Login_Register/Login.jsx";
  // import Register from "./Ecom/Login_Register/Register.jsx";
  // import RazorPage from "./Ecom/RazorPay/Razorpay.jsx";
  // import Success from "./Ecom/RazorPay/Success.jsx";
  // // Import CartProvider
  // import { CartProvider } from './Ecom/Cart/CartContext.jsx'; // Adjust path accordingly
  // import CartDetail from './Ecom/Cart/CartDetails.jsx';  
  // import BuyingHistory from './Ecom/Cart/BuyingHistory.jsx';

  // const App = () => {
  //   return (
  //     <Router>
  //       <CartProvider>
  //         <MainContent />
  //       </CartProvider>
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
  //   const isCartPage = location.pathname.startsWith("/cart")
  //   const isLoginPage = location.pathname === "/login"; 
  //   const isRegisterPage = location.pathname === "/register";
  //   const isCheckoutPage = location.pathname === "/checkout";
  //   const isSuccessPage = location.pathname === "/success";

  //     return (
  //     <>
  //       {/* Conditionally render Navbar or Nav2 based on the current route */}
  //       {!isLoginPage && !isRegisterPage && !isCheckoutPage && !isSuccessPage && (isCartPage || isProductPage || isCoursePage ? <Nav2 /> : <Navbar />)}

  //       <Routes>
  //         <Route path="/drona_learning" element={<Home />} />
  //         <Route path="/courses" element={<Courses />} />
  //         <Route path="/home" element={<CourseCard />} />
  //         <Route path="/course/:courseId" element={<CoursePage />} />
  //         <Route path="/" element={<ProductList products={products} />} />
  //         <Route path="/cart" element={<CartDetail />} />
  //         <Route path="/checkout" element={<RazorPage />} />
  //         <Route path ="/success" element={<Success />} />
  //         <Route path ="/history" element={<BuyingHistory />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
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
import Login from "./Ecom/Login_Register/Login.jsx";
import Register from "./Ecom/Login_Register/Register.jsx";
import RazorPage from "./Ecom/RazorPay/Razorpay.jsx";
import Success from "./Ecom/RazorPay/Success.jsx";
import { CartProvider } from './Ecom/Cart/CartContext.jsx';
import CartDetail from './Ecom/Cart/CartDetails.jsx';  
import BuyingHistory from './Ecom/Cart/BuyingHistory.jsx';
import ScrollToTop from "./components/ScrollToTop.jsx"; // Import ScrollToTop

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop to reset scroll position */}
      <CartProvider>
        <MainContent />
      </CartProvider>
    </Router>
  );
};

// MainContent component to handle the conditional rendering
const MainContent = () => {
  const location = useLocation();

  const isCoursePage = location.pathname.startsWith("/course/");
  const isProductPage = location.pathname.startsWith("/product/");
  const isCartPage = location.pathname.startsWith("/cart");
  const isLoginPage = location.pathname === "/login"; 
  const isRegisterPage = location.pathname === "/register";
  const isCheckoutPage = location.pathname === "/checkout";
  const isSuccessPage = location.pathname === "/success";

  return (
    <>
      {!isLoginPage && !isRegisterPage && !isCheckoutPage && !isSuccessPage && 
        (isCartPage || isProductPage || isCoursePage ? <Nav2 /> : <Navbar />)
      }

      <Routes>
        <Route path="/drona_learning" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/home" element={<CourseCard />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/checkout" element={<RazorPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/history" element={<BuyingHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
