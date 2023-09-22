import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdsv0Bt16GFEN7Ph0qpTs-LtzW6fVoAIM",
  authDomain: "fullstackbankapp.firebaseapp.com",
  projectId: "fullstackbankapp",
  storageBucket: "fullstackbankapp.appspot.com",
  messagingSenderId: "706429237779",
  appId: "1:706429237779:web:892cc45ee3ffa01b5f5de6",
  measurementId: "G-B61XLJSLZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);