import {initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbw58QBWr-i_n_rNGZo-f3XXhqVWVHHdk",
  authDomain: "hospitalprocurementbt3103.firebaseapp.com",
  databaseURL: "https://hospitalprocurementbt3103-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hospitalprocurementbt3103",
  storageBucket: "hospitalprocurementbt3103.appspot.com",
  messagingSenderId: "460777037982",
  appId: "1:460777037982:web:b6288b26db013afa645b8f",
  measurementId: "G-SFB9TEVJFN"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  export default firebaseApp
  
