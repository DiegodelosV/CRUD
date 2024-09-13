// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "crud-colaboradores-5916d.firebaseapp.com",
  projectId: "crud-colaboradores-5916d",
  storageBucket: "crud-colaboradores-5916d.appspot.com",
  messagingSenderId: "1011001117128",
  appId: "1:1011001117128:web:2faaa2012bb7e636ee18fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app