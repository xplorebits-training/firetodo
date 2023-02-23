import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

import './assets/main.css'


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
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

createApp(App).use(createPinia()).mount('#app')
