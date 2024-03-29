import Constant from '@core/constants';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
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

const middleware =
  process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
