import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

firebase.initializeApp(config);

export const fb_db = firebase.database();
export const public_db = firebase.database().ref('/events');
export const user_events_db = firebase.database().ref('/user-events');
export const storage = firebase.storage();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
