import firebase from "firebase";



const firebaseConfig = {
   apiKey: "your API key",
   authDomain: "Your auth Domain",
   projectId: "Your project Id",
   storageBucket: "Your storage Bucket",
   messagingSenderId: "Your messaging SenderId",
   appId: "Your app id"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { db, auth, provider };