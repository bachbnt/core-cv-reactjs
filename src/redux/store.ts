import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Constant } from 'src/constants/constants';
import configReducer from './configSlice';
import spinnerReducer from './spinnerSlice';
import userReducer from './userSlice';

const persistConfig: PersistConfig<any> = {
  key: Constant.APP_NAME,
  storage,
  whitelist: ['configReducer', 'userReducer'],
};

const reducers = combineReducers({
  configReducer,
  spinnerReducer,
  userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
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
