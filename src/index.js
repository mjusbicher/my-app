import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAcbTZiZJ1q8m5XtVYGcIiGYRBsqEdBLuI",
    authDomain: "react-app-31140.firebaseapp.com",
    projectId: "react-app-31140",
    storageBucket: "react-app-31140.appspot.com",
    messagingSenderId: "234690895981",
    appId: "1:234690895981:web:9d335a6866d90893bc1f64",
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
