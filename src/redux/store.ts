import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Constant } from 'src/constants/constant';
import * as rootReducer from './rootReducer';
import { RootState } from './rootState';

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
