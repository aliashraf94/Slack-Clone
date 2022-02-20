import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
require('dotenv').config()


  const firebaseConfig = {
    apiKey:  "AIzaSyDYrzCQspYqcczr9T019ANTcapkt0-xr9Q",
    authDomain: "slack-clone-57130.firebaseapp.com",
    projectId: "slack-clone-57130",
    storageBucket: "slack-clone-57130.appspot.com",
    messagingSenderId: "66053058103",
    appId: "1:66053058103:web:46ff7c1bf7575b1dea99b2"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db ;