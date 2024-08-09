import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <AuthProvider> 
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
