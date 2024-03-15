// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM4fU80nkJmul-XBadK21wYggK09TecPc",
  authDomain: "todo-app-b8ed7.firebaseapp.com",
  projectId: "todo-app-b8ed7",
  storageBucket: "todo-app-b8ed7.appspot.com",
  messagingSenderId: "927996458823",
  appId: "1:927996458823:web:38db619861bd05effe7e62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)