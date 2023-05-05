// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwCu5mIv64xfEMElPBTZvrZrsq7xfUNYc",
  authDomain: "fir-practice-42e37.firebaseapp.com",
  projectId: "fir-practice-42e37",
  storageBucket: "fir-practice-42e37.appspot.com",
  messagingSenderId: "751613905858",
  appId: "1:751613905858:web:9c7501c40a843ce5e2245b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;