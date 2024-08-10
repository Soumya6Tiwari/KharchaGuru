// import React, { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AUTH_API } from '../api/apiEndpoints';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       fetchUserProfile(token);
//     }
//   }, []);

//   const fetchUserProfile = async (token) => {
//     try {
//       const response = await axios.get(AUTH_API.PROFILE, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//       localStorage.removeItem('token');
//       navigate('/login');
//     }
//   };

//   const login = async (username, password) => {
//     try {
//       const response = await axios.post('/api/v1/auth/login', { username, password });
//       localStorage.setItem('token', response.data.token);
//       setUser(response.data.user);
//       navigate('/');
//       window.location.reload(); 

//     } catch (error) {
//       console.error('Error during login:', error);
//       // Optionally, handle error (e.g., show an error message)
//     }
//   };

//   const signup = async (username, password) => {
//     try {
//       const response = await axios.post('/api/v1/auth/signup', { username, password });
//       console.log('Signup response:', response);
//       navigate('/login');
//       // login(username, password);
//     } catch (error) {
//       console.error('Error during signup:', error);
//       // Optionally, handle error (e.g., show an error message)
//       if (error.response && error.response.status === 409) {
//         // Handle duplicate key error (e.g., email already exists)
//         console.error('User already exists.');
//       }
//     }
//   };

//   const signOut = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, signup, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH_API } from '../api/apiEndpoints';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(AUTH_API.PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(AUTH_API.LOGIN, { username, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setAuthError('');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.status === 401) {
        setAuthError('Invalid username or password');
      } else {
        setAuthError('An error occurred. Please try again later.');
      }
    }
  };

  const signup = async (username, password) => {
    try {
      const response = await axios.post(AUTH_API.SIGNUP, { username, password });
      console.log('Signup response:', response);
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.response && error.response.status === 409) {
        setAuthError('User already exists.');
      } else {
        setAuthError('An error occurred. Please try again later.');
      }
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, signOut, authError }}>
      {children}
    </AuthContext.Provider>
  );
};
