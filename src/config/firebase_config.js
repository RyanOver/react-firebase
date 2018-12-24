import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-O1WmJco1Uejc4Wu6Qd6Eqxf91fqvgwc",
  authDomain: "snote-77c76.firebaseapp.com",
  databaseURL: "https://snote-77c76.firebaseio.com",
  projectId: "snote-77c76",
  storageBucket: "snote-77c76.appspot.com",
  messagingSenderId: "706775806313"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;