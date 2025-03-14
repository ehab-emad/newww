// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore Database
import { getAuth } from "firebase/auth"; // For Firebase Authentication
import { getStorage} from "firebase/storage";




const firebaseConfig = {

    apiKey: "AIzaSyCA7Z7CgmKVLHQQ2Hi5566VKDTICreTZ3w",
    authDomain: "trentdb-c5666.firebaseapp.com",
    databaseURL: "https://trentdb-c5666-default-rtdb.firebaseio.com",
    projectId: "trentdb-c5666",
    storageBucket: "trentdb-c5666.firebasestorage.app",
    messagingSenderId: "458510671023",
    appId: "1:458510671023:web:4c209f8b33a204fd9d085a",
    measurementId: "G-Z511BHZ43L"
  
};
// Initialize Firebase
let app;
let firestore;
let auth;
let storage;

try {
  app = initializeApp(firebaseConfig);
  firestore = getFirestore(app); // Initialize Firestore
  auth = getAuth(app); // Initialize Authentication
  storage = getStorage(app); // Initialize Storage
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization failed', error);
}

export { app, firestore, auth, storage }; // Export stor