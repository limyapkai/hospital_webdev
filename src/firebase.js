import {initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";

//Yap Kai Edited this page in his branch
//Yap Kai added a new Branch called yapkaiV1
const firebaseConfig = {
  apiKey: "AIzaSyB1OVt7lf1oH3g1fO6rqsKVXU8tfK0jeQg",
  authDomain: "bt3103project-b69fb.firebaseapp.com",
  projectId: "bt3103project-b69fb",
  storageBucket: "bt3103project-b69fb.appspot.com",
  messagingSenderId: "812445459565",
  appId: "1:812445459565:web:5906c3c6112b56b7718b64",
  measurementId: "G-61XJMJD53T"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  export default firebaseApp
  
