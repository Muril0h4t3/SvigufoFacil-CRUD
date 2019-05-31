import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAF8k-NvuIG1AXQKokgcJx1vT46trN5iy4",
    authDomain: "svigufoman.firebaseapp.com",
    databaseURL: "https://svigufoman.firebaseio.com",
    projectId: "svigufoman",
    storageBucket: "svigufoman.appspot.com",
    messagingSenderId: "801759888010",
    appId: "1:801759888010:web:7890462af2783eb4"
  };

firebase.initializeApp(config);

export default firebase;

