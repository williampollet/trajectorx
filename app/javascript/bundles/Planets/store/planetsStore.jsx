import { applyMiddleware, createStore } from 'redux';
import planetsReducer from '../reducers/planetsReducers.js';
import logger from 'redux-logger'

const configureStore = (railsProps) => (
  createStore(planetsReducer, railsProps, applyMiddleware(logger))
);

export default configureStore;
