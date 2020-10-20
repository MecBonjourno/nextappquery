import firebase from 'firebase';
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCg2Ju09sL4ZirRGLE7UC3fns150-cbhq0",
    authDomain: "teste-6b232.firebaseapp.com",
    databaseURL: "https://teste-6b232.firebaseio.com",
    projectId: "teste-6b232",
    storageBucket: "teste-6b232.appspot.com",
    messagingSenderId: "54239387189",
    appId: "1:54239387189:web:d387e201b2ae7378",
    measurementId: "G-D0NVMQCS1S"
  };
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;

const storage = fire.storage();

export {storage, fire as default};