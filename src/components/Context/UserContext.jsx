// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// const fetchUserDetails = async (token) => {
//     try {
//       const response = await axios.get("/api/auth/validate-token", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (response.data.valid) {
//         return response.data.user;
//       } else {
//         console.error("Token validation returned false");
//         return null;
//       }
//     } catch (error) {
//       console.error("Failed to fetch user details", error);
//       return null;
//     }
//   };

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       fetchUserDetails(token).then(userData => {
//         if (userData) {
//           setUser(userData); // Check if this line executes correctly
//         } else {
//           console.log("No user data found, clearing token");
//           localStorage.removeItem('token');
//         }
//       });
//     }
//   }, []);

//   const login = (userData, token) => {
//     setUser(userData);
//     localStorage.setItem('token', token);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const fetchUserDetails = async (token) => {
  try {
    const response = await axios.get("/api/auth/validate-token", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.user; // Assuming the server responds with user data on successful token validation
  } catch (error) {
    console.error("Failed to fetch user details", error);
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserDetails(token).then(userData => {
        if (userData) {
          setUser(userData); // Set user data upon successful validation
        } else {
          localStorage.removeItem('token');
        }
      });
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
