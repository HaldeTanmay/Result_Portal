// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoQIcLFMUJQnLZeK-JleAXv9JKc7kqRHU",
  authDomain: "parinaam-527ae.firebaseapp.com",
  projectId: "parinaam-527ae",
  storageBucket: "parinaam-527ae.appspot.com",
  messagingSenderId: "405532201266",
  appId: "1:405532201266:web:0e39f37a5e33738959872b",
  measurementId: "G-YD7NXNNW0J",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
