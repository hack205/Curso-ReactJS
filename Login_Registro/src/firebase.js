import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD6_WQxXbUUzLLoCqUMuMNOz0nVGr6jbGc",
    authDomain: "crud-udemy-react.firebaseapp.com",
    databaseURL: "https://crud-udemy-react.firebaseio.com",
    projectId: "crud-udemy-react",
    storageBucket: "crud-udemy-react.appspot.com",
    messagingSenderId: "405061261339",
    appId: "1:405061261339:web:6229c488384445abb240be"
};

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {auth, db}