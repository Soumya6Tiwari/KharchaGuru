import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import logo_kharcha_guru from '../../img/logo_kharcha_guru.png';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password).catch(err => {
      setError('Signup failed. Please try again.');
    });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#FFF0F5',  // Example pink-purple mix
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '12px 0',
      borderRadius: '10px',
      border: '1px solid #ced4da',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: 'green',  // Example pink-purple mix
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '15px',
      transition: 'background-color 0.3s ease',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#343a40',
      fontSize: '24px',
    },
    link: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#007bff',
      textDecoration: 'none',
      fontSize: '14px',
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#6c757d',
      fontSize: '16px',
    },
    logo: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    logoImg: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',  // Circular shape
    },
  };

  return (
    <div style={styles.container}>
       <div style={styles.logo}>
        <img
          src={logo_kharcha_guru}
          alt=""
          style={styles.logoImg}
        />
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>New User</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Signup
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
      <p style={styles.link}>
        Already have an account? <Link to="/login" style={{ color: '#007bff' }}>Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
