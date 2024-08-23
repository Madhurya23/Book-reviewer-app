import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Use environment variables for Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user); // Send verification email
        return userCredential;
    } catch (error) {
        console.error("Error registering with email and password:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

export const signInWithGoogle = async () => {
    try {
        return await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

export const signInWithEmail = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing in with email and password:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};