import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA86TzErj1WwWj-razRl5y2QzoW3bjakZ8",
  authDomain: "santa-app-69791.firebaseapp.com",
  projectId: "santa-app-69791",
  storageBucket: "santa-app-69791.appspot.com",
  messagingSenderId: "318737399800",
  appId: "1:318737399800:web:21182b1d738500c130600d",
  measurementId: "G-7K7EJ25GT8"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
