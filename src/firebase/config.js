// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYDmPqnwKcWCMq5DtW7BFJhFoe6zCoVUU",
  authDomain: "vuex-for-firebase-auth.firebaseapp.com",
  projectId: "vuex-for-firebase-auth",
  storageBucket: "vuex-for-firebase-auth.appspot.com",
  messagingSenderId: "824363484873",
  appId: "1:824363484873:web:8fa2ff9f6b1ffcfc66af18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth()

export { app, auth }

