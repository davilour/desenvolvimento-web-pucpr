import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCUgpr4waNacqtSqeHvzbXUUKBzU5MW2FQ",
  authDomain: "pucpr-auth.firebaseapp.com",
  projectId: "pucpr-auth",
  storageBucket: "pucpr-auth.appspot.com",
  messagingSenderId: "297136767175",
  appId: "1:297136767175:web:56d9d4778aedd45ea8fee2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
