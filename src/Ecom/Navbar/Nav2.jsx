
// import React, { useState } from "react";
// import { useCart } from "../Cart/CartContext";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// import "./Nav2.css";
// import { useAuth } from "../Login_Register/AuthContext";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const { isAuthenticated, logout } = useAuth(); // Get user state from AuthContext

//   const { cart, removeFromCart } = useCart();
//   const navigate = useNavigate(); // Initialize navigate function

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleCart = () => setIsCartOpen(!isCartOpen);

//   const handleLoginClick = () => {
//     navigate("/login"); // Navigate to login page
//   };

//   return (
//     <nav className="nav2">
//       {/* Left Icon */}
//       <div className="nav2-icon">
//         <img
//           src="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.png"
//           alt="Logo"
//         />
//       </div>

//       {/* Hamburger Icon */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>

//       {/* Center Links */}
//       <ul className={`nav2-links ${isMenuOpen ? "active" : ""}`}>
//         <li><a href="/course/aslp">DronaPlus</a></li>
//         <li><a href="/about">Plans-N-Pricing</a></li>
//         <li><a href="/course/aslp#P">Buy-Course</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>

//       {/* Right Icons */}
//       <div className="nav2-icons">
//         {/* Cart Icon */}
//         <div className="nav2-cart" onClick={toggleCart}>
//           <img
//             src="https://dhruv-kundu14.github.io/drona_learning/Icons/Ecom/cart.png"
//             alt="Cart Icon"
//             className="cart-icon"
//           />
//           {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
//           {isCartOpen && (
//             <div className="cart-dropdown">
//               <ul>
//                 {cart.map((item) => (
//                   <li key={item.id} className="cart-item">
//                     <img src={item.image} alt={item.name} className="cart-item-image" />
//                     <span>{item.name} - ₹{item.price}</span>
//                     <button onClick={() => removeFromCart(item.id)} className="remove-button">
//                       Remove
//                     </button>
//                   </li>
//                 ))}
//                 {cart.length > 0 && (
//                   <li>
//                     <a href={`/cart?data=${encodeURIComponent(JSON.stringify(cart))}`}>
//                       View Cart
//                     </a>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Login Icon */}
//         <div className="nav2-login" onClick={handleLoginClick}>
//           <img
//             src="https://dhruv-kundu14.github.io/drona_learning/Icons/Ecom/user.png"
//             alt="Login Icon"
//             className="login-icon"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";
import "./Nav2.css";
import { useAuth } from "../Login_Register/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown
  const { isAuthenticated, user, logout } = useAuth();
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleLoginClick = () => navigate("/login");
  const handleLogoutClick = () => {
    logout();
    navigate("/course/aslp#P");
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="nav2">
      {/* Left Icon */}
      <div className="nav2-icon" onClick={() => navigate("/")}>
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.png"
          alt="Logo"
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Center Links */}
      <ul className={`nav2-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="/course/aslp">DronaPlus</a>
        </li>
        <li>
          <a href="/about">Plans-N-Pricing</a>
        </li>
        <li>
          <a href="/course/aslp#P">Buy-Course</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="nav2-icons">
        {/* Cart Icon */}
        {isAuthenticated && (
          <div className="nav2-cart" onClick={toggleCart}>
            <img
              src="https://dhruv-kundu14.github.io/drona_learning/Icons/Ecom/cart.png"
              alt="Cart Icon"
              className="cart-icon"
            />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span> // Show cart count
            )}
            {isCartOpen && (
              <div className="cart-dropdown">
                <ul>
                  {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <span>
                        {item.name} - ₹{item.price}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                  {cart.length > 0 && (
                    <li>
                      <a
                        href={`/cart?data=${encodeURIComponent(
                          JSON.stringify(cart)
                        )}`}
                      >
                        View Cart
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* User Login/Logout Icon or User Initials */}
        <div className="nav2-login">
          {isAuthenticated ? (
            <div className="nav2-user">
              {/* Display user's first letter or name */}
              <span className="user-initial" onClick={toggleDropdown}>
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </span>

              {/* Dropdown for user options */}
              {isDropdownOpen && (
                <div className="dropdown">
                  <button className="dropdown-button">User Options</button>
                  <div className="dropdown-content">
                    <a href="/profile">Profile</a> {/* Link to profile page */}
                    <a href="/user-history">User History</a> {/* Link to user history page */}
                    <button className="logout-button" onClick={handleLogoutClick}>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <img
              src="https://dhruv-kundu14.github.io/drona_learning/Icons/Ecom/user.png"
              alt="Login Icon"
              className="login-icon"
              onClick={handleLoginClick}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
