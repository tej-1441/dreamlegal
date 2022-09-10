import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA37MUol7_Uq-uaTa6e00woqShpX3nTgfk",
    authDomain: "dreamlegal.firebaseapp.com",
    projectId: "dreamlegal",
    storageBucket: "dreamlegal.appspot.com",
    messagingSenderId: "765504559881",
    appId: "1:765504559881:web:ed44b3cc3acc7b977291d8",
    measurementId: "G-QZJHDVXYWK"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth};
export default fireDb.database().ref();