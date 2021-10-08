import {initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDTbGQRn-edOFkodgnc_2-VW5WckxAvx9E",
    authDomain: "democppfiredev1.firebaseapp.com",
    projectId: "democppfiredev1",
    storageBucket: "democppfiredev1.appspot.com",
    messagingSenderId: "121503855921",
    appId: "1:121503855921:web:8bae8b4d80e05a7bb06c10"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  export default firebaseApp
  
