import Constant from '@core/constants';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import configReducer from './configSlice';
import skeletonReducer from './skeletonSlice';
import spinnerReducer from './spinnerSlice';
import userReducer from './userSlice';

const reducers = combineReducers({
  configReducer,
  spinnerReducer,
  userReducer,
  skeletonReducer,
});

export type CombinedState = ReturnType<typeof reducers>;

const persistConfig: PersistConfig<CombinedState> = {
  key: Constant.APP_NAME,
  storage,
  whitelist: ['configReducer', 'userReducer'],
};

const persistedReducer = persistReducer<CombinedState>(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false, // redux-persist compatibility
    });
    if (import.meta.env.DEV) {
      return middleware.concat(logger as any);
    }
    return middleware;
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
