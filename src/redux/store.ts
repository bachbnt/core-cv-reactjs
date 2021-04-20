import { applyMiddleware, combineReducers, createStore } from 'redux';
import { RootState } from './rootState';
import * as rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import { Constant } from '../constants/constant';
import storage from 'redux-persist/lib/storage';

const persistConfig: PersistConfig<any> = {
  key: Constant.APP_NAME,
  storage,
  whitelist: ['UserReducer'],
};
const appReducer = combineReducers<RootState>(rootReducer);

export const store = createStore(
  persistReducer(persistConfig, appReducer),
  applyMiddleware(thunk)
);

persistStore(store);
