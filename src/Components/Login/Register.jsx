import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailValidation = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (localStorage.getItem(username)) {
      setErrorMessage('Username already exists. Please choose a different one.');
      return;
    }

    if (!handleEmailValidation(email)) {
      setErrorMessage('Invalid email format. Please enter a valid email address.');
      return;
    }

    localStorage.setItem(username, password);
    setSuccessMessage('Registration successful.');
    setErrorMessage('');

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='reg-page'>
     <div class="app-name-container">
                <span class="app-name">Fae Follio</span>
                </div>
    <div className='login-container'>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="enter email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    </div>
  );
}

export default Register;