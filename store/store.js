import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunk, loggerMiddleware);
export const store = createStore(reducer, middleware);
