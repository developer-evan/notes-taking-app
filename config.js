import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDVB6di9SJwv9hlkIgc0Cvx_7VKgA2AHyg",
    authDomain: "notesapp-1c0cd.firebaseapp.com",
    projectId: "notesapp-1c0cd",
    storageBucket: "notesapp-1c0cd.appspot.com",
    messagingSenderId: "363312767326",
    appId: "1:363312767326:web:8c908d7cda92f731e76fcf",
    measurementId: "G-FZEY5F2M4M"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export{firebase};