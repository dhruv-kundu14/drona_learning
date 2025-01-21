import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login1.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from './AuthContext';


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      // const response = await fetch('http://localhost:5001/api/login', {
        const response = await fetch(`${backendUrl}/common-backend/api/loginForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      localStorage.setItem("userId", data.userId);
      console.log("data",data.userId);
      

      if (response.ok) {
        console.log(data.message); // Login successful
        localStorage.setItem('jwtToken', data.token);
        login(data.token); // Pass token to login function
        navigate('/course/aslp#P'); // Redirect to a protected route
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <>
    <div className="login-container">

    
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          required
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <MDBBtn type="submit" color="primary" className="mb-3">
          Login
        </MDBBtn>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Register here
          </Link>
        </p>
      </form>
    </div>
    </div>
    </>
  );
};

export default UserLogin;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import './Login.css'; // Ensure you have your CSS in the same structure

// const UserLogin = () => {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [registerData, setRegisterData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     gender: '',
//     phoneNumber: '',
//     address: '',
//   });

//   const navigate = useNavigate(); // Initialize the navigate function

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsSignIn(true);
//     }, 200);
//     return () => clearTimeout(timer);
//   }, []);

//   const toggle = () => {
//     setIsSignIn(!isSignIn);
//   };

//   const handleLoginChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleRegisterChange = (e) => {
//     setRegisterData({ ...registerData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const backendUrl = process.env.REACT_APP_BACKEND_URL;
//       const response = await axios.post(`${backendUrl}/common-backend/api/loginForm`, loginData);

//       if (response.status === 200) {
//         alert('Login successful!');
//         localStorage.setItem('jwtToken', response.data.token);
//         navigate('/course/aslp#P'); // Redirect to a protected route after login
//       } else {
//         alert(response.data.message || 'Failed to login. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login error:', error.response || error);
//       alert('Error logging in. Please check your credentials.');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
  
//     // Basic validation
//     if (registerData.password !== registerData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
  
//     try {
//       const backendUrl = process.env.REACT_APP_BACKEND_URL;
//       const response = await axios.post(`${backendUrl}/common-backend/api/registerForm`, registerData);
  
//       if (response.status === 200) {
//         alert('Registration successful! You can now log in.');
//         setIsSignIn(true); // Switch to login view
//         navigate('/login'); // Redirect to login after successful registration
//       } else {
//         alert(response.data.message || 'Failed to register. Please try again.');
//       }
//     } catch (error) {
//       console.error('Registration error:', error.response || error);
//       alert('Error registering. Please check your inputs.');
//     }
//   };
  

//   return (
//     <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
//       {/* FORM SECTION */}
//       <div className="row">
//         {/* SIGN UP */}
//         <div className="col align-items-center flex-col sign-up">
//           <div className="form-wrapper align-items-center">
//             <form className="form sign-up" onSubmit={handleRegister}>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="name">Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={registerData.name}
//                     onChange={handleRegisterChange}
//                     required
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Email Address *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={registerData.email}
//                     onChange={handleRegisterChange}
//                     required
//                     placeholder="Enter your email"
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="password">Password *</label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={registerData.password}
//                     onChange={handleRegisterChange}
//                     required
//                     placeholder="Enter your password"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="confirmPassword">Confirm Password *</label>
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     value={registerData.confirmPassword}
//                     onChange={handleRegisterChange}
//                     required
//                     placeholder="Confirm your password"
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="gender">Gender *</label>
//                   <select
//                     name="gender"
//                     value={registerData.gender}
//                     onChange={handleRegisterChange}
//                     required
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="phoneNumber">Phone Number *</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={registerData.phoneNumber}
//                     onChange={handleRegisterChange}
//                     required
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>

//               <div className="form-row address-row">
//                 <div className="form-group address-input">
//                   <label htmlFor="address">Address *</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={registerData.address}
//                     onChange={handleRegisterChange}
//                     required
//                     placeholder="Enter your address"
//                   />
//                 </div>
//               </div>

//               <button type="submit">Sign up</button>
//               <p>
//                 <span>Already have an account?</span>
//                 <b onClick={toggle} className="pointer">
//                   Sign in here
//                 </b>
//               </p>
//             </form>
//           </div>
//         </div>
//         {/* END SIGN UP */}

//         {/* SIGN IN */}
//         <div className="col align-items-center flex-col sign-in">
//           <div className="form-wrapper align-items-center">
//             <form className="form sign-in" onSubmit={handleLogin}>
//               <div className="input-group">
//                 <i className="bx bx-mail-send"></i>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={loginData.email}
//                   onChange={handleLoginChange}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <i className="bx bxs-lock-alt"></i>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={loginData.password}
//                   onChange={handleLoginChange}
//                   required
//                 />
//               </div>
//               <button type="submit">Sign in</button>
//               {/* <p>
//                 <b>Forgot password?</b>
//               </p> */}
//               <p>
//                 <span>Don't have an account?</span>
//                 <b onClick={toggle} className="pointer">
//                   Sign up here
//                 </b>
//               </p>
//             </form>
//           </div>
//         </div>
//         {/* END SIGN IN */}
//       </div>
//       {/* END FORM SECTION */}

//       {/* CONTENT SECTION */}
//       <div className="row content-row">
//         <div className="col align-items-center flex-col">
//           <div className="text sign-in">
//             <h2>Welcome To Drona<sup>+</sup></h2>
//           </div>
//           <div className="img sign-in"></div>
//         </div>
//         <div className="col align-items-center flex-col">
//           <div className="img sign-up"></div>
//           <div className="text sign-up">
//             <h2>Join us at Drona<sup>+</sup></h2>
//           </div>
//         </div>
//       </div>
//       {/* END CONTENT SECTION */}
//     </div>
//   );
// };

// export default UserLogin;
