import { firebaseConfig } from '../constants/config';
import firebase from 'firebase';

export const firestore = firebase.initializeApp(firebaseConfig).firestore();
