import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5VSkZMqlftAMUGEqrKrHYYEL0IczRV94",
  authDomain: "myfirstapp-9edab.firebaseapp.com",
  projectId: "myfirstapp-9edab",
  storageBucket: "myfirstapp-9edab.appspot.com",
  messagingSenderId: "547388879687",
  appId: "1:547388879687:web:9fa50ee409c28701afd262"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;