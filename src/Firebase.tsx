import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBQOm6fD7k1uU0hRhly6Pbt3f1oGYV3W7A",
  authDomain: "clone-9f3b7.firebaseapp.com",
  databaseURL: "https://clone-9f3b7.firebaseio.com",
  projectId: "clone-9f3b7",
  storageBucket: "clone-9f3b7.appspot.com",
  messagingSenderId: "310319749527",
  appId: "1:310319749527:web:cd16653735563f298e0cd2",
  measurementId: "G-ZH60L2YRGK",
});
const auth = firebase.auth();

export { auth };
