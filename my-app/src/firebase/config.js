import {initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore/lite';
import {getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import {getStorage,ref} from 'firebase/storage'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeBVv-zfiGz-1eZYhSDYXA64popYcQSuA",
  authDomain: "fir-69c7d.firebaseapp.com",
  projectId: "fir-69c7d",
  storageBucket: "fir-69c7d.appspot.com",
  messagingSenderId: "272806018268",
  appId: "1:272806018268:web:a4a2411b83ae61d84f0819",
  measurementId: "G-G7GKH0QV9T"
};

 const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const Collection = collection
export const GetDoc = getDocs
export const AddDoc = addDoc
export const signIn = signInWithEmailAndPassword
export const onAuthState = onAuthStateChanged
export const signout = signOut
export const storage = getStorage
export const Ref = ref

export default firebase.initializeApp(firebaseConfig);