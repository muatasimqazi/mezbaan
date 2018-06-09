import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/app";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOpLstvzqvq29hMAonnSqrswNz1qIEH7E",
    authDomain: "mezbaan-fb.firebaseapp.com",
    databaseURL: "https://mezbaan-fb.firebaseio.com",
    projectId: "mezbaan-fb",
    storageBucket: "mezbaan-fb.appspot.com",
    messagingSenderId: "182459269600"
  };
  firebase.initializeApp(config);
  
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
