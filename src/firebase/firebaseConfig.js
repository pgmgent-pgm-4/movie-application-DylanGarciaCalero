import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBBOnlI08BM1EedWR2e2kW5ZsAJkXclbCs",
  authDomain: "movie-application-3566f.firebaseapp.com",
  projectId: "movie-application-3566f",
  storageBucket: "movie-application-3566f.appspot.com",
  messagingSenderId: "3726424583",
  appId: "1:3726424583:web:2b69df962ee1d9c58988a2",
  measurementId: "G-0TQDYEGV41"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {
  firebase,
  db
}