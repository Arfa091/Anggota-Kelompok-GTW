// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyARWeAhj8vNXTeDwDe1a15hm-uzhPPwjC0",
  authDomain: "monitoring-iot-6daae.firebaseapp.com",
  databaseURL: "https://monitoring-iot-6daae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-iot-6daae",
  storageBucket: "monitoring-iot-6daae.firebasestorage.app",
  messagingSenderId: "557598750439",
  appId: "1:557598750439:web:8d70d77ecabf46fdce5442",
  measurementId: "G-DS2YLLDFHM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
