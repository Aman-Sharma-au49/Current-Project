
// import React, { useState } from 'react';
// import Option from './Option';
// import './Login.css';

// export default function Login() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Regular expression to validate username format
//   const usernameRegex = /^[a-zA-Z0-9]+$/;


//   async function signup(e) {
//     e.preventDefault();

//     // Create a data object with the user input
//     const data = {
//       username: name,
//       email: email,
//       password: password
//     };

//     try {
//       // Make a POST request to the signup endpoint
//       const response = await fetch('http://localhost:3000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         // If the request is successful, set the state to indicate that the user is logged in
//         setIsLoggedIn(true);
//       } else {
//         // If there's an error with the request, throw an error or handle it accordingly
//         throw new Error('Failed to sign up');
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//       // Handle the error, e.g., show an error message to the user
//     }
//   }

//   async function login(e) {
//     e.preventDefault();

//     // Create a data object with the user input
//     const data = {
//       username: name,
//       password: password
//     };

//     try {
//       // Make a POST request to the login endpoint
//       const response = await fetch('http://localhost:3000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         // If the request is successful, set the state to indicate that the user is logged in
//         setIsLoggedIn(true);
//       } else {
//         // If there's an error with the request, throw an error or handle it accordingly
//         throw new Error('Failed to login');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       // Handle the error, e.g., show an error message to the user
//     }
//   }

//   return (
//     <div className="login-container">
//       {!isLoggedIn && !isRegistering && (
//         <form onSubmit={login} className='form'>
//           <h2>Login </h2>
//           <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Username' className='input' required/><br /><br />
//           <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='input' required minLength={6} maxLength={8}/><br /><br />
//           <button type="submit" className='button'>Login</button>
//           <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Sign Up</span></p>
//         </form>
//       )}

//       {!isLoggedIn && isRegistering && (
//         <form onSubmit={signup} className='form'>
//           <h2>Register </h2>
//           <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Username' className='input' required/><br /><br />
//           <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='input' required/><br /><br />
//           <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='input' required minLength={6} maxLength={8}/><br /><br />
//           <button type="submit" className='button'>Sign Up</button>
//           <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
//         </form>
//       )}

//       {isLoggedIn && <Option name={name} email={email} />}
//     </div>
//   );
// }




import React, { useState } from 'react';
import Option from './Option';
import './Login.css';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signup(e) {
    e.preventDefault();
  
    const data = {
      username: name,
      email: email,
      password: password
    };
  
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        alert('Username or email already exists. Please choose a different one.');

        const responseData = await response.json();
        console.log(responseData); // Log the response data to the console
        if (responseData.error === 'User already registered') {
          alert('Username or email already exists. Please choose a different one.');
        } else {
          throw new Error('Failed to sign up');
        }
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
  

  async function login(e) {
    e.preventDefault();

    const data = {
      username: name,
      password: password
    };

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
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




