import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from 'src/constants/configs';

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
