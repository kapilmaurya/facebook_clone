// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0USpPPnpDaT0wyadi2SwghteEf_ub6wQ",
  authDomain: "facebook-b6b15.firebaseapp.com",
  projectId: "facebook-b6b15",
  storageBucket: "facebook-b6b15.appspot.com",
  messagingSenderId: "844794832415",
  appId: "1:844794832415:web:e74477b4cbc7bfd0ef972a",
  measurementId: "G-1DBGJ469D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
signInWithEmail()
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });