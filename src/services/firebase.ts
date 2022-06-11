import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from 'src/constants/configs';

export const firestore = firebase.initializeApp(firebaseConfig).firestore();
