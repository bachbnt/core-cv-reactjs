import firebase from 'firebase';
import { firebaseConfig } from 'src/constants/config';

export const firestore = firebase.initializeApp(firebaseConfig).firestore();
