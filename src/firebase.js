
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,serverTimestamp  } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

// const firebaseConfig = {
//   apiKey: "AIzaSyDeTixCdzsVFsxDgwfCO4_ewMq1DxGW_FQ",
//   authDomain: "netflix-clone-stripe-1a89f.firebaseapp.com",
//   projectId: "netflix-clone-stripe-1a89f",
//   storageBucket: "netflix-clone-stripe-1a89f.appspot.com",
//   messagingSenderId: "631791242984",
//   appId: "1:631791242984:web:392cc7d90edc3969b0035d"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAYk1155uK44G8ezvf1GFc3DgIuEH1WEgk",
  authDomain: "redhawk-6abce.firebaseapp.com",
  projectId: "redhawk-6abce",
  storageBucket: "redhawk-6abce.appspot.com",
  messagingSenderId: "30144354718",
  appId: "1:30144354718:web:05137a2ae62fab5c74de8f",
  measurementId: "G-T7WVHQX6PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth,serverTimestamp,provider}