
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // Check localStorage for existing token to initialize authentication state
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return localStorage.getItem('jwtToken') !== null; // Initialize state based on token presence
//   });

//   const login = (token) => {
//     localStorage.setItem('jwtToken', token); // Store token in localStorage
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('jwtToken'); // Remove token from localStorage
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };



/* ----------------------------------------------------------------------- */

// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return localStorage.getItem("jwtToken") !== null;
//   });

//   const login = (token) => {
//     localStorage.setItem("jwtToken", token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("jwtToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize authentication state based on localStorage or a fallback value
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('jwtToken');
    return token !== null; // Check if the token exists in localStorage
  });

  // const [user, setUser] = useState(() => {
  //   const userData = localStorage.getItem('user');
  //   console.log("userData: ", userData);
  //   try {
  //     return userData ? JSON.parse(userData) : {}; // Safely parse user data or fallback to an empty object
  //   } catch (error) {
  //     console.error("Error parsing user data:", error);
  //     return {}; // Return an empty object if the parsing fails
  //   }
  // });

  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem('user');
    console.log("userData: ", userData);
    try {
      return userData ? JSON.parse(userData) : null; // Parse and handle properly
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null; // Return null if there's an error
    }
  });

  // const login = (token, userData) => {
  //   localStorage.setItem('jwtToken', token); // Store token in localStorage
  //   localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
  //   setIsAuthenticated(true);
  //   setUser(userData);
  // };

  const login = (token, userData) => {
    console.log("Logging in with token:", token);  // Debugging the token
    console.log("Logging in with userData:", userData);  // Debugging the userData
    if (userData) {
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(userData)); // Store the user object correctly
      setIsAuthenticated(true);
      setUser(userData);
      
    } else {
      console.error("User data is undefined");
    }
  };
  
  

  const logout = () => {
    localStorage.removeItem('jwtToken'); // Remove token from localStorage
    localStorage.removeItem('user'); // Remove user data from localStorage
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
