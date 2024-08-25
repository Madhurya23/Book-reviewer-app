
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmail, signInWithGoogle } from '../../firebaseConfig';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmail(email, password);
            sessionStorage.setItem('isLoggedIn', 'true'); 
            navigate('/genres'); 
        } catch (error) {
            setErrorMsg("Invalid email or password");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            sessionStorage.setItem('isLoggedIn', 'true'); 
            navigate('/genres'); 
        } catch (error) {
            setErrorMsg("Google sign-in failed");
        }
    };

    return (
        
    <div className="login-page">
      <div class="app-name-container">
                <span class="app-name">Fae Follio</span>
                </div>

        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div id='em'><label>Enter Your Email ID:</label></div>
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="password-container">
                    <div id='pwd'><label>Enter Your Password:</label></div>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span 
                        className="password-toggle-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={handleGoogleSignIn}>Log In/Sign Up with Google</button>
            </form>
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            <h3>Not a member? <Link to="/register" id='reg'>Register with Email</Link></h3>
            <h4><Link to="/password-reset" id='pw'>Forgot Password?</Link></h4>
        </div>
        </div>
        
    );
}

export default Login;