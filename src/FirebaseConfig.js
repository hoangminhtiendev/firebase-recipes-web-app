// lecture
// import firebase from "firebase";


//repair stackoverflow
import firebase from "firebase/compat/app"

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUDGET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_ID,
};

if (!firebase.apps.length){
    firebase.initializeApp(config);

    // Use these for db & auth
}

export default firebase;