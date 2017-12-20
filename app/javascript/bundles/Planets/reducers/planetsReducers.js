import { combineReducers } from 'redux';
import { LAUNCH_ROCKET } from '../constants/planetsConstants';
import { INCREMENT_TIMER } from '../constants/planetsConstants';

const rocket_status = (state = '', action) => {
  switch (action.type) {
    case LAUNCH_ROCKET:
      return 'rocket launched!';
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

const planetsReducer = combineReducers({ rocket_status, timer });

export default planetsReducer;
