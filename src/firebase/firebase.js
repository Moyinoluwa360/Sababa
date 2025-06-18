// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, setDoc, addDoc, doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEup0v4_GeiuirQL0-4fOciaWl_iHhChU",
  authDomain: "sababa-40c06.firebaseapp.com",
  projectId: "sababa-40c06",
  storageBucket: "sababa-40c06.firebasestorage.app",
  messagingSenderId: "390293857279",
  appId: "1:390293857279:web:d39aebaeffe0f4a814fdca",
  measurementId: "G-R1XT9ZXNE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();

export {collection, addDoc, setDoc, doc };

export default app;