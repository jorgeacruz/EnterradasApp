import firebase from "firebase";
import 'firebase/database';

//setting firebase
let firebaseConfig = {
    apiKey: "AIzaSyDptOKt6mqIaQifV7POThLjpuMS0oPsjUk",
    authDomain: "enterradasapp.firebaseapp.com",
    projectId: "enterradasapp",
    storageBucket: "enterradasapp.appspot.com",
    messagingSenderId: "26377929738",
    appId: "1:26377929738:web:619e8571c063c8c24a0bf3"
  };
  
  if(!firebase.apps.length){
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;