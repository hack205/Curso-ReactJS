import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCzV4SwNNttxwTPAeznxMm4Ug1GxQtlhFk",
    authDomain: "crud-udemy-react-42d0d.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-42d0d.firebaseio.com",
    projectId: "crud-udemy-react-42d0d",
    storageBucket: "crud-udemy-react-42d0d.appspot.com",
    messagingSenderId: "29569773185",
    appId: "1:29569773185:web:d34ddacdfd6aca72f8a780"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}