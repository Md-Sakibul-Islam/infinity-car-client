import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const firebaseAuth = ()=>{
    initializeApp(firebaseConfig);
}

export default firebaseAuth;