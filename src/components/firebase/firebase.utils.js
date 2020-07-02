import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyAOceiYHGnZIWla0vcd1QG8BIf2tif8upI",
    authDomain: "moringa-qa.firebaseapp.com",
    databaseURL: "https://moringa-qa.firebaseio.com",
    projectId: "moringa-qa",
    storageBucket: "moringa-qa.appspot.com",
    messagingSenderId: "572067118483",
    appId: "1:572067118483:web:9722c36fdf776c28087c66"
};
!firebase.apps.length? firebase.initializeApp(config).firestore(): firebase.app().firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)

export default firebase