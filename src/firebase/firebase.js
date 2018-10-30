import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVTTO2Jx9eqIq9-ySSLcA_2wYbzlhU4a8",
    authDomain: "activesocial-818d1.firebaseapp.com",
    databaseURL: "https://activesocial-818d1.firebaseio.com",
    projectId: "activesocial-818d1",
    storageBucket: "gs://activesocial-818d1.appspot.com",
    messagingSenderId: "139583683349",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};