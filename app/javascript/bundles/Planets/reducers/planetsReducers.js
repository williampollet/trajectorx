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

const speed = (state = '', action) => {
  switch (action.type) {
    case LAUNCH_ROCKET:
      return 1;
    default:
      return state;
  }
};

const time = (state = '', action) => {
  return state.time + 1
};

const x = (state = '', action) => {
  switch (action.type) {
    case TIME_INTERVAL_START:
      return ;
    default:
      return state;
  }
};

const y = (state = '', action) => {
  switch (action.type) {
    case TIME_INTERVAL_START:
      return ;
    default:
      return state;
  }
};

const planetsReducer = combineReducers({ rocket_status });

export default planetsReducer;
