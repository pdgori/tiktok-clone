import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_OJ1tayo_Wp7hUIgoZ4WTRC62IXT-ZIg",
  authDomain: "tiktok-clone-811ab.firebaseapp.com",
  databaseURL: "https://tiktok-clone-811ab.firebaseio.com",
  projectId: "tiktok-clone-811ab",
  storageBucket: "tiktok-clone-811ab.appspot.com",
  messagingSenderId: "627352927380",
  appId: "1:627352927380:web:94f5cfb7ca8ef421998881",
  measurementId: "G-DXKWG4B64Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
