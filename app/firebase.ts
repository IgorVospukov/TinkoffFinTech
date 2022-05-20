import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAEsVqBGJqkx3nr6PTNIRcPHI2p77eixDQ",
  authDomain: "tinkofffinserv.firebaseapp.com",
  projectId: "tinkofffinserv",
  storageBucket: "tinkofffinserv.appspot.com",
  messagingSenderId: "631103173854",
  appId: "1:631103173854:web:63d9b9099d0f0843c7be4f",
  measurementId: "G-3N20WWE1VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email,password);
export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
export const db = getFirestore();