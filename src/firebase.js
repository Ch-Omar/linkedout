import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoIsA1CLXGro1Go7clWRBaJhI_8_ODLdk",
  authDomain: "linkedout-db7c5.firebaseapp.com",
  projectId: "linkedout-db7c5",
  storageBucket: "linkedout-db7c5.appspot.com",
  messagingSenderId: "537105243027",
  appId: "1:537105243027:web:d8c4a751b168c5e991a666"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;