import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSRXT8AKmmU07M3wEk4FEqcaJqWwXaNRY',
  authDomain: 'crown-dd-f2377.firebaseapp.com',
  projectId: 'crown-dd-f2377.firebaseapp.com',
  storageBucket: 'crown-dd-f2377.appspot.com',
  messagingSenderId: '65829223206',
  appId: '1:65829223206:web:acb3af5d17428213055fe7',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
