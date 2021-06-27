import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const Config = {
  apiKey: "AIzaSyD6RryVQKJIXL2h2uEBAAVSAFTii1cZE88",
  authDomain: "flipping-card.firebaseapp.com",
  projectId: "flipping-card",
  storageBucket: "flipping-card.appspot.com",
  messagingSenderId: "607060718619",
  appId: "1:607060718619:web:3402c0c4375f98ccd234be",
  measurementId: "G-NWG78B3B2F"
};

firebase.initializeApp(Config)


firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
    merge: true
});
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp()
export const db = firebase.firestore()
export const auth  = firebase.auth()
export default firebase

