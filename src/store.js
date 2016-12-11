import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import MovieReducer  from './reducers/MovieReducer';

let middleware = applyMiddleware(thunk, logger(), promise());

export default createStore(MovieReducer, middleware);
