import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyDgwzWGqhHUxtWHZY5FqdNOtv8vWhHtJvs",
    authDomain: "chat-react-cda73.firebaseapp.com",
    projectId: "chat-react-cda73",
    storageBucket: "chat-react-cda73.appspot.com",
    messagingSenderId: "767400763973",
    appId: "1:767400763973:web:5358c5aab63554ec96b92c",
    measurementId: "G-SEYJDVPD15"
});

const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

