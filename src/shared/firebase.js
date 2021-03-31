import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANwJH2yfoG6G5gIppnjBYPzkEO52y_9bo",
  authDomain: "my-dictionary-c467d.firebaseapp.com",
  projectId: "my-dictionary-c467d",
  storageBucket: "my-dictionary-c467d.appspot.com",
  messagingSenderId: "234295276999",
  appId: "1:234295276999:web:88db7d90defff2f693d5e2",
  measurementId: "G-G7EZTJGX4M"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();

export{apiKey, firestore};