import firebase from "firebase";
import firebaseConfig from "utilities/config/firebaseConfig";
// Copy your own firebaseConfig to the above folder by creating a firebase Project

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };