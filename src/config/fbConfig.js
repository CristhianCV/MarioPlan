import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCY6EESXPodK0YidA1--lddDUIEL_K-Hww",
  authDomain: "mario-plan-74084.firebaseapp.com",
  databaseURL: "https://mario-plan-74084.firebaseio.com",
  projectId: "mario-plan-74084",
  storageBucket: "mario-plan-74084.appspot.com",
  messagingSenderId: "69592864111",
  appId: "1:69592864111:web:2c19fec975ec1f6453449a",
  measurementId: "G-XQ9BN3GFPL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
