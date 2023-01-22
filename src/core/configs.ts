import Constant from './constants';

export const firebaseConfig = {
  apiKey: Constant.FIREBASE_API_KEY,
  authDomain: Constant.FIREBASE_AUTH_DOMAIN,
  projectId: Constant.FIREBASE_PROJECT_ID,
  storageBucket: Constant.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constant.FIREBASE_MESSAGING_SENDER_ID,
  appId: Constant.FIREBASE_APP_ID,
  measurementId: Constant.FIREBASE_MEASUREMENT_ID,
};

export enum FirestoreCollection {
  CONFIG = 'config',
  MESSAGE = 'message',
  USER = 'user',
}

export enum FirestoreDocument {
  CONFIG = 'config',
  LOCALIZATION = 'localization',
  MESSAGE = 'message',
  CONTACT = 'contact',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  PROFILE = 'profile',
  PROJECT = 'project',
  SERVICE = 'service',
  SKILL = 'skill',
  PAYMENT = 'payment',
}
