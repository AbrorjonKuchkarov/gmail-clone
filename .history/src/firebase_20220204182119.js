import firebase from "firebase";


const firebaseConfig = {
   apiKey: REACT_APP_API_KEY,
   authDomain: REACT_APP_AUTH_DOMAIN,
   projectId: REACT_APP_PROJECT_ID,
   storageBucket: REACT_APP_STORAGE_BUCKET,
   messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
   appId: REACT_APP_APP_ID
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { db, auth, provider };