import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBn0A4kz8a84lsnWDL9WQbCArg6vOTaRv4",
  authDomain: "twitter-clone-4f193.firebaseapp.com",
  projectId: "twitter-clone-4f193",
  storageBucket: "twitter-clone-4f193.appspot.com",
  messagingSenderId: "289738203814",
  appId: "1:289738203814:web:91732e1339f72f59734a67",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
