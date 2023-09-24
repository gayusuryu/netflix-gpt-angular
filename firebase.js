// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDahV1aiftRPPzRc7Tf6UwosuDAkRtmM3Q",
  authDomain: "netflixgptangular.firebaseapp.com",
  projectId: "netflixgptangular",
  storageBucket: "netflixgptangular.appspot.com",
  messagingSenderId: "183140082272",
  appId: "1:183140082272:web:60ee68105b80d8474cd905",
  measurementId: "G-7GQR20516T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);