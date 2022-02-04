import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDpowaRRYjnhXIhzmHkC4ypbYIl5eb49JM",
   authDomain: "clone-d426e.firebaseapp.com",
   projectId: "clone-d426e",
   storageBucket: "clone-d426e.appspot.com",
   messagingSenderId: "445185517543",
   appId: "1:445185517543:web:d3ae7e80ec918d564c7f42",
   measurementId: "G-7Y07Y0N4WK"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { db, auth, provider };