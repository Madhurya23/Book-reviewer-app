import React from 'react';
import { signInWithGoogle } from '../../firebaseConfig';
import { useHistory } from 'react-router-dom';

function SignUp() {
  const history = useHistory();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      // Handle the result of Google sign-in (e.g., save user info, redirect)
      history.push('/home'); // Redirect to home page after successful sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <button onClick={handleGoogleSignIn}>Sign Up with Google</button>
    </div>
  );
}

export default SignUp;