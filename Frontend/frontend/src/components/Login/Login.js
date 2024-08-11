
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import logo_kharcha_guru from '../../img/logo_kharcha_guru.png';
import BACKGROUND_LOGIN_SIGNUP from '../../img/BACKGROUND_LOGIN_SIGNUP.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // State for error message
  const { login } = useContext(AuthContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError('Invalid username or password');  // Set error message
    }
  };


        const styles = {
          container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            backgroundImage: `url(${BACKGROUND_LOGIN_SIGNUP})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
          form: {
            backgroundColor: '#FFF0F5',
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
            backgroundColor: '#FF00FF',
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
            borderRadius: '50%',
          },
          error: {
            color: 'red',
            textAlign: 'center',
            marginBottom: '10px',
          },
        };

  return (
    <div style={styles.container}>
      <div style={styles.logo}>
        <img
          src={logo_kharcha_guru}
          alt="KharchaGuru Logo"
          style={styles.logoImg}
        />
       </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.subtitle}>Streamline your expense management...</p>
        {error && <p style={styles.error}>{error}</p>}
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
        <button type="submit" style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#218838')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF00FF')}
        >
          Login

        </button>
        <p style={styles.link}>
          New here? <Link to="/signup" style={{ color: '#007bff' }}>Create an Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;