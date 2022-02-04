import firebase from "firebase";



const firebaseConfig = {
   apiKey: "AIzaSyCod5j0sKNcLUsO8594LKDwQAVAaEfhvDY",
   authDomain: "clone-96877.firebaseapp.com",
   projectId: "clone-96877",
   storageBucket: "clone-96877.appspot.com",
   messagingSenderId: "222777243572",
   appId: "1:222777243572:web:2004878c762947fe7de4e1"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export { db, auth, provider };