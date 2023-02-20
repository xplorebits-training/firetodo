import { createApp } from 'vue'
import App from './App.vue'

import firebase from "firebase"

import './assets/main.css'

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAyBeyxKx2le0pTLHqXTfkou8fCEh8PRkU",
    authDomain: "firetodo-91191.firebaseapp.com",
    projectId: "firetodo-91191",
    storageBucket: "firetodo-91191.appspot.com",
    messagingSenderId: "476762818767",
    appId: "1:476762818767:web:431be2b19284c2fb0b0fba",
    measurementId: "G-GK728G0DF4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

createApp(App).mount('#app')
