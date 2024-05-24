import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpPUglhNw15Yx6Mr-kojTV1kkTTngAfzs",
  authDomain: "crud-firebase-ec5d9.firebaseapp.com",
  projectId: "crud-firebase-ec5d9",
  storageBucket: "crud-firebase-ec5d9.appspot.com",
  messagingSenderId: "314105077625",
  appId: "1:314105077625:web:0bb045a1b402f126ef99a8",
  measurementId: "G-RZQ8B4EDHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export default database;