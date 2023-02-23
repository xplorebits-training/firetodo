import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import './assets/main.css'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCAjuMdp7a8M_Dv49lg0_Gvmujbdoeybzc",
  authDomain: "vue3-firetodo.firebaseapp.com",
  projectId: "vue3-firetodo",
  storageBucket: "vue3-firetodo.appspot.com",
  messagingSenderId: "524594453982",
  appId: "1:524594453982:web:f31301458837788e16514f"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
createApp(App).use(createPinia()).mount('#app')
