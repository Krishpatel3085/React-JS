import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBa0_pLC-Kon1E51Lgcdhg9atqrrijbOU0",
  authDomain: "fir-d3602.firebaseapp.com",
  databaseURL: "https://fir-d3602-default-rtdb.firebaseio.com",
  projectId: "fir-d3602",
  storageBucket: "fir-d3602.appspot.com",
  messagingSenderId: "465558452433",
  appId: "1:465558452433:web:3e8230905e504a5ddbadf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;