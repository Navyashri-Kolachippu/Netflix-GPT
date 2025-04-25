import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbjgYkwCkI7J9Lmox_WaVwnWP1Kl3b0sE",
  authDomain: "netflixgpt-d74a3.firebaseapp.com",
  projectId: "netflixgpt-d74a3",
  storageBucket: "netflixgpt-d74a3.firebasestorage.app",
  messagingSenderId: "254336216691",
  appId: "1:254336216691:web:d33eadaa7f6b65c100c406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();