import firebase from "firebase";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMjLoHG2yqCBOwhfYdHZXTER3KXmnoX_4",
  authDomain: "reactproject-8513c.firebaseapp.com",
  databaseURL: "https://reactproject-8513c-default-rtdb.firebaseio.com",
  projectId: "reactproject-8513c",
  storageBucket: "reactproject-8513c.appspot.com",
  messagingSenderId: "1085914153230",
  appId: "1:1085914153230:web:a07abaefbaf5a48318975f"
};

const fireDB=firebase.initializeApp(firebaseConfig)

export default fireDB.database().ref();