import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBp-Bz_M6IcCeCi3yOCzjMjztCtMw9Oau8",
    authDomain: "hackathon-project-32f81.firebaseapp.com",
    projectId: "hackathon-project-32f81",
    storageBucket: "hackathon-project-32f81.appspot.com",
    messagingSenderId: "134368734015",
    appId: "1:134368734015:web:e67bf37c6722ad1f82018a",
    measurementId: "G-CE3JZZ1X24"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseApp.storage();


export { storage };