import firebase from 'firebase/compat/app'; // Import the compat module for Firebase v9 compatibility
import 'firebase/compat/auth'; // Import individual services for Firebase v9 compatibility
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCH9SkSsLLZp6RQvaCttkBDnLm2a7A_37A",
    authDomain: "disney-clone-41b5e.firebaseapp.com",
    projectId: "disney-clone-41b5e",
    storageBucket: "disney-clone-41b5e.appspot.com",
    messagingSenderId: "400215491081",
    appId: "1:400215491081:web:3da3520afd15c12fe8aed8",
    measurementId: "G-LNV101GB61"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;