import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyCWs795DewxiKRMpwQxacrNyMtQFKLiszQ",
  
    authDomain: "netflix-cdb3b.firebaseapp.com",
  
    projectId: "netflix-cdb3b",
  
    storageBucket: "netflix-cdb3b.appspot.com",
  
    messagingSenderId: "568040980644",
  
    appId: "1:568040980644:web:85b80154c1a7f128c6e631",
  
    measurementId: "G-E501V0128Q"
  
};
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// create storage
const storage = getStorage(app);
export default storage;