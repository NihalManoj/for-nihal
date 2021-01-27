import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDfkshUm9G5nZ12O35b-AyZc6EktB6h4uU",
    authDomain: "community-878a9.firebaseapp.com",
    databaseURL: "https://community-878a9.firebaseio.com",
    projectId: "community-878a9",
    storageBucket: "community-878a9.appspot.com",
    messagingSenderId: "509804149460",
    appId: "1:509804149460:web:9d1fa042c55fbb1cb91941"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
