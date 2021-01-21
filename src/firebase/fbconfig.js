import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB1Qcxz-9sr-GY6ueFeFs-s8LUbel-OYP4",
  authDomain: "resume-abf8a.firebaseapp.com",
  databaseURL: "https://resume-abf8a-default-rtdb.firebaseio.com",
  projectId: "resume-abf8a",
  storageBucket: "resume-abf8a.appspot.com",
  messagingSenderId: "589777946790",
  appId: "1:589777946790:web:6e96ca32db3befd2d24c67",
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , db , provider , firebaseApp};
