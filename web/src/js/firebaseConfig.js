import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQma2yIS-VxHtdqz9IRTBuN0tsxgFhgwA",
  authDomain: "chat-conecti.firebaseapp.com",
  projectId: "chat-conecti",
  storageBucket: "chat-conecti.appspot.com",
  messagingSenderId: "269880954763",
  appId: "1:269880954763:web:82e2fddeb757eac382298e",
  measurementId: "G-Y2SG39KJP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const databaseApp = getFirestore(app);

export { app, auth, databaseApp };