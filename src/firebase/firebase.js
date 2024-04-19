// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getDocs, getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOjnghdyJCLrONZhCVpElrlGPpmPIlcZY",
  authDomain: "coderhouse-ecommerce-bb155.firebaseapp.com",
  projectId: "coderhouse-ecommerce-bb155",
  storageBucket: "coderhouse-ecommerce-bb155.appspot.com",
  messagingSenderId: "962172150805",
  appId: "1:962172150805:web:ce092b35e10e5db7901a1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts(){

    const response = await getDocs(collection(db, 'products'));
    console.log(response); 
    const listaProds = []
    response.forEach(doc => listaProds.push(doc.data()) )
    return listaProds;
}