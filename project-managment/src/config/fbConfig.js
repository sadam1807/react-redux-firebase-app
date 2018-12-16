import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCOtS1Tymuwxu_Q7oWGoaSJYeYpJJ8RJ9M",
    authDomain: "project-managment-26f02.firebaseapp.com",
    databaseURL: "https://project-managment-26f02.firebaseio.com",
    projectId: "project-managment-26f02",
    storageBucket: "project-managment-26f02.appspot.com",
    messagingSenderId: "607415357292"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;