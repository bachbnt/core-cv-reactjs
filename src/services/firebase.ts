import { firebaseConfig } from '@core/configs';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
