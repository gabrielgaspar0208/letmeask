import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyA-7juikwTueQi2K92xIahpmiYZ3zEYn4I",
    authDomain: "letmeask-b908b.firebaseapp.com",
    databaseURL: "https://letmeask-b908b-default-rtdb.firebaseio.com",
    projectId: "letmeask-b908b",
    storageBucket: "letmeask-b908b.appspot.com",
    messagingSenderId: "1080889340583",
    appId: "1:1080889340583:web:34ab9205e5eba509206182"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();