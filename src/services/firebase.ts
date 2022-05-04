import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from 'src/constants/config';

export const firestore = firebase.initializeApp(firebaseConfig).firestore();
