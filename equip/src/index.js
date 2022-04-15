import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from 'firebase/app';
import 'firebase/firestore';
// import "firebase/firestore";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBpI6-bqy31EwJYXmXIVofHTxwm1TaIv6w",
    authDomain: "fireproj-b6cf1.firebaseapp.com",
    projectId: "fireproj-b6cf1",
    storageBucket: "fireproj-b6cf1.appspot.com",
    messagingSenderId: "852058782270",
    appId: "1:852058782270:web:c987a05633dd0e6742ef6f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
