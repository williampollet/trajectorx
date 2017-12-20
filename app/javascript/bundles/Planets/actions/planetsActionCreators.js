/* eslint-disable import/prefer-default-export */

import { LAUNCH_ROCKET } from '../constants/planetsConstants';
import { INCREMENT_TIMER } from '../constants/planetsConstants';

export const launchRocket = (text) => ({
  type: LAUNCH_ROCKET,
});

export const tick = (timer) => ({
  type : INCREMENT_TIMER,
})
