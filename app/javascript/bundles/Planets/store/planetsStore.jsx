import { createStore } from 'redux';
import planetsReducer from '../reducers/planetsReducers.js';

const configureStore = (railsProps) => (
  createStore(planetsReducer, railsProps)
);

export default configureStore;
