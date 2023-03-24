// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxwUjqWYaIP23Try_gPsmUOci7cakDjd8",
  authDomain: "imagehost-140b6.firebaseapp.com",
  projectId: "imagehost-140b6",
  storageBucket: "imagehost-140b6.appspot.com",
  messagingSenderId: "760078403877",
  appId: "1:760078403877:web:275b6fdc9def46476372cc",
  measurementId: "G-FYN8Z3XBJ7",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
