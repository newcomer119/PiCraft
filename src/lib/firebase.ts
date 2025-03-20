import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDV2JlYseC7x8UaTnowunXwSAxWyja-e0",
  authDomain: "picraft-d6d58.firebaseapp.com",
  projectId: "picraft-d6d58",
  storageBucket: "picraft-d6d58.firebasestorage.app",
  messagingSenderId: "772004194432",
  appId: "1:772004194432:web:b0ecfaf66bef8428061e65",
  measurementId: "G-F5N6BMSNEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;