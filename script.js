<script>
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDRyWciR2ytPI7bkwByql3Wj6FFwdYJ9R4",
    authDomain: "sobisha-f83ba.firebaseapp.com",
    databaseURL: "https://sobisha-f83ba-default-rtdb.firebaseio.com",
    projectId: "sobisha-f83ba",
    storageBucket: "sobisha-f83ba.firebasestorage.app",
    messagingSenderId: "336287987378",
    appId: "1:336287987378:web:05e60f621c6fcaf1d6fbab",
    measurementId: "G-XXV2EMSNHK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
