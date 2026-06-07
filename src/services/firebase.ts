/**
 * Copyright (c) 2026 bachbnt. All rights reserved.
 */

import { firebaseConfig } from '@core/configs';
import { getAnalytics } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore';

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const getFirestoreInstance = () => {
  try {
    return initializeFirestore(app, {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    });
  } catch {
    return getFirestore(app);
  }
};

export const firestore = getFirestoreInstance();

export const analytics = getAnalytics(app);
