import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZXknRpIpOn7yqrw3kXmdDiOmgWzsol9E",
  authDomain: "cart-c360f.firebaseapp.com",
  databaseURL: "https://cart-c360f.firebaseio.com",
  projectId: "cart-c360f",
  storageBucket: "cart-c360f.appspot.com",
  messagingSenderId: "508263747381",
  appId: "1:508263747381:web:3defae8b220eb76d9e467c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();