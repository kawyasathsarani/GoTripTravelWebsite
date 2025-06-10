// firebase.js

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAUvthaiqjtVGzF3mLSgc63ktmmdodKiog",
    authDomain: "traver-tourism.firebaseapp.com",
    projectId: "traver-tourism",
    storageBucket: "traver-tourism.firebasestorage.app",
    messagingSenderId: "343272697347",
    appId: "1:343272697347:web:817996a70dd55bda34a836",
    measurementId: "G-25FJFK0EFN"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);