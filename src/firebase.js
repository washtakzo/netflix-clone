import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRAz3VJkTOkQRhKOZfUHPBI3U86ax6Q3c",
  authDomain: "netflix-clone-ee57f.firebaseapp.com",
  projectId: "netflix-clone-ee57f",
  storageBucket: "netflix-clone-ee57f.appspot.com",
  messagingSenderId: "546154413563",
  appId: "1:546154413563:web:aca4ff6b5587e014b2df5e",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const signinUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export { createUser, signinUser };
