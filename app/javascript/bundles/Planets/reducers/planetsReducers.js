import { combineReducers } from 'redux';
import { LAUNCH_ROCKET } from '../constants/planetsConstants';
import { INCREMENT_TIMER } from '../constants/planetsConstants';
import { LOAD } from '../constants/planetsConstants'
import { reducer as formReducer } from 'redux-form'

const rocketStatus = (state = '', action) => {
  switch (action.type) {
    case LAUNCH_ROCKET:
      return 'launched!';
    default:
      return state;
  }
};

const timer = (state = '', action) => {
  switch (action.type) {
    case INCREMENT_TIMER:
      return state+1
    default:
      return state;
  }
}

const positionX = (state = '', action) => {
  switch (action.type) {
    case INCREMENT_TIMER:
      return state
    default:
      return state;
  }
}

const positionY = (state = '', action) => {
  switch (action.type) {
    case INCREMENT_TIMER:
      return state
    default:
      return state;
  }
}

const launchVelocity = (state = '', action) => {
  return state;
}

const launchAngle = (state = '', action) => {
  return state;
}

const loadData = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      console.log(state)
      console.log(action)
      return {
        launchAngle: action.launchAngle,
        launchVelocity: action.launchVelocity,
      }
    default:
      return state;
  }
}

const planetsReducer = combineReducers({
  rocketStatus,
  timer,
  positionX,
  positionY,
  launchAngle,
  launchVelocity,
  loadData,
  form: formReducer,
});



export default planetsReducer;
