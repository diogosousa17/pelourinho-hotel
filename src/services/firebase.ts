import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// Connection to FireBase
const firebaseConfig = {
    apiKey: "AIzaSyDG-VSmxn09UDO6OXu5iXK6NQXgY20ifGg",
  authDomain: "pelourinho-hotel-spa.firebaseapp.com",
  projectId: "pelourinho-hotel-spa",
  storageBucket: "pelourinho-hotel-spa.appspot.com",
  messagingSenderId: "1038723314089",
  appId: "1:1038723314089:web:dfc24bf832d32dba5714b8"
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp)

export { storage, ref, uploadBytesResumable, getDownloadURL }