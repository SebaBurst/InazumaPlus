import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiKWLukw-_acJYIJq6HMyRM-5-ddfLIT0",
    authDomain: "inazumaweb-3e5c6.firebaseapp.com",
    projectId: "inazumaweb-3e5c6",
    storageBucket: "inazumaweb-3e5c6.appspot.com",
    messagingSenderId: "511279872927",
    appId: "1:511279872927:web:cc17ceb0c27bc6805cdbaa",
    measurementId: "G-WVK34CHSW1"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const firestore = getFirestore(app);
export const auth = getAuth(app);