import * as firebaseApp from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, set, update } from 'firebase/database';

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const FIREBASE_APP = firebaseApp.initializeApp(FIREBASE_CONFIG);

export async function signInWithGoogle() {
  return firebaseAuth.signInWithPopup(
    firebaseAuth.getAuth(),
    new firebaseAuth.GoogleAuthProvider()
  );
}

export async function logout() {
  signOut(firebaseAuth.getAuth());
}
