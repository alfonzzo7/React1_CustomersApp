import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducers';

const composeEnhacers = compose;

export const store = createStore(reducers, {}, composeEnhacers(applyMiddleware(promiseMiddleware)));