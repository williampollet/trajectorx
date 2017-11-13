import { combineReducers } from 'redux';
import { LAUNCH_ROCKET } from '../constants/planetsConstants';

const rocket_status = (state = '', action) => {
  switch (action.type) {
    case LAUNCH_ROCKET:
      return 'rocket launched!';
    default:
      return state;
  }
};

const planetsReducer = combineReducers({ rocket_status });

export default planetsReducer;
