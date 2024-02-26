import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNcZjh6SdNyaceLvPP7MH_WRE5ca2SCzA",
    authDomain: "familychat-6ff18.firebaseapp.com",
    projectId: "familychat-6ff18",
    storageBucket: "familychat-6ff18.appspot.com",
    messagingSenderId: "92924251688",
    appId: "1:92924251688:web:e254068885575ab79b6f1d",
    measurementId: "G-86NR2WE3HB"
  }
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  export { auth, db };