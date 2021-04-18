import { applyMiddleware, combineReducers, createStore } from 'redux';
import { RootState } from './rootState';
import * as rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const appReducer = combineReducers<RootState>(rootReducer);
export const store = createStore(appReducer, applyMiddleware(thunk));
