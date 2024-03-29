import { firebaseConfig } from '@core/configs';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
