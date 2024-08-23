import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // To track login status
    const navigate = useNavigate(); // To programmatically navigate to another route

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedPwd = localStorage.getItem(username);

        if (!(storedPwd)) {
            setErrorMsg("User not found");
            return;
        }
        if (storedPwd !== password) {
            setErrorMsg("Wrong password");
            return;
        }

        setErrorMsg('');
        setIsLoggedIn(true); // Set login status to true on successful login
    };

    const goToGenrePage = () => {
        navigate('/genres'); // Navigate to the genre page
    };

    return (
    <div className="login-page">
      <div class="app-name-container">
                <span class="app-name">Fae Follio</span>
                </div>

        <div className='login-container'>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {errorMsg && <p className="error-message">{errorMsg}</p>}

            <h3>Not a member? <Link to="/register">Register</Link></h3>

            {/* Only show this button after a successful login */}
            {isLoggedIn && (
                <button onClick={goToGenrePage} className="genre-page-button">
                    Go to Genre Page
                </button>
            )}
        </div>
        </div>
    );
}

export default Login;
