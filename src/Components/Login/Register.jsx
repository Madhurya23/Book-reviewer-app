import React, {useState} from 'react';

function Register(){
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handlesubmit=(event)=>{
        event.preventDefault();

        if (localStorage.getItem(username)) {
            setErrorMessage('Username already exists. Please choose a different one.');
            return;
        }

        localStorage.setItem(username, password);
        setSuccessMessage('Registration successful.');
        setErrorMessage('');
          
        setUsername('');
        setEmail('');
        setPassword('');

        /*console.log('Username:',username);
        console.log('Email:',email);
        console.log('Password:',password);*/
    };
    return(
        <div className='login-container'>
        <h2>Registration Page</h2>
        <form onSubmit={handlesubmit}>
            <div>
              <label>Username:</label>
                <input 
                type="text"
                placeholder="enter username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                required
                />
            </div>
            <div>
              <label>Email:</label>
                <input 
                type="text"
                placeholder="enter email id"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                />
            </div>
            <div>
            <label>Password:</label>
                <input 
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit">Register</button>

        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
  
}
export default Register;