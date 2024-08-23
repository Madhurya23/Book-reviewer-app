

import React, { useState } from 'react';
import { registerWithEmailAndPassword } from '../../firebaseConfig';
import './Register.css';
function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await registerWithEmailAndPassword(email, password);
            setSuccessMessage('Registration successful. Please check your email for verification.');
            setErrorMessage('');
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setErrorMessage(error.message);
            setSuccessMessage('');
        }
    };

    return (
      <div className='register-page'>
        <div className='register-container'>
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
                        type="email"
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