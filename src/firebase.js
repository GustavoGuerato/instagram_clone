import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfqC9JDjd1TKzdefSippbC4Ugo-2AGaDg",
  authDomain: "instagram-clone-app-bd2f5.firebaseapp.com",
  projectId: "instagram-clone-app-bd2f5",
  storageBucket: "instagram-clone-app-bd2f5.appspot.com",
  messagingSenderId: "659831141113",
  appId: "1:659831141113:web:82464cf094999d2b652828",
  measurementId: "G-BQFDQE8JRP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
