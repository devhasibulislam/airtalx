// // src/firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyDH3SWMvB396_4K_s7zVI-WskGhd-9rhNE",
//     authDomain: "airtallx.firebaseapp.com",
//     projectId: "airtallx",
//     storageBucket: "airtallx.appspot.com",
//     messagingSenderId: "813188916450",
//     appId: "1:813188916450:web:70813b0a9b3c9bb300aabb",
//     measurementId: "G-K47C674L3D"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export default firebase;

// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
