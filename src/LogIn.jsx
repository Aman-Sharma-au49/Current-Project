import React, { useState } from 'react';
import Option from './Option';
import './Login.css';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signup(e) {
    e.preventDefault();
    // Here you can perform any client-side validation if needed
    setIsLoggedIn(true);
  }

  function login(e) {
    e.preventDefault();
    // Here you can perform any client-side validation if needed
    setIsLoggedIn(true);
  }

  function handleUsernameChange(e) {
    const value = e.target.value;
    const containsOnlyDigits = /^\d+$/.test(value);

    if (containsOnlyDigits) {
      alert('Username cannot contain only digits.');
    } else {
      setName(value);
    }
  }

  return (
    <div className="login-container">
      {!isLoggedIn && !isRegistering && (
        <form onSubmit={login} className='form'>
          <h2>Login </h2>
          <input 
            type="text" 
            onChange={handleUsernameChange} 
            placeholder='Username' 
            className='input' 
            required
          /><br /><br />
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter Password' 
            className='input' 
            required 
            minLength={6} 
            maxLength={8}
          /><br /><br />
          <button type="submit" className='button'>Login</button>
          <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Sign Up</span></p>
        </form>
      )}

      {!isLoggedIn && isRegistering && (
        <form onSubmit={signup} className='form'>
          <h2>Register </h2>
          <input 
            type="text" 
            onChange={handleUsernameChange} 
            placeholder='Username' 
            className='input' 
            required
          /><br /><br />
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Enter Email' 
            className='input' 
            required
          /><br /><br />
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter Password' 
            className='input' 
            required 
            minLength={6} 
            maxLength={8}
          /><br /><br />
          <button type="submit" className='button'>Sign Up</button>
          <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
        </form>
      )}

      {isLoggedIn && <Option name={name} email={email} />}
    </div>
  );
}
