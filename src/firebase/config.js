import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBW8Zb9T_DtjgiOOJB63id2NamUwUlDJw0",
  authDomain: "mini-blog-387cf.firebaseapp.com",
  projectId: "mini-blog-387cf",
  storageBucket: "mini-blog-387cf.firebasestorage.app",
  messagingSenderId: "1092400926710",
  appId: "1:1092400926710:web:186aefd36e823f8fc641d7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };