import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

 const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//  const db = firebaseApp.firestore();
 const auth = db.auth();
 const provider = new db.auth.GoogleAuthProvider();

 export { db, auth, provider };