/* eslint-disable import/prefer-default-export */

import { LAUNCH_ROCKET } from '../constants/planetsConstants';
import { INCREMENT_TIMER } from '../constants/planetsConstants';
import { LOAD } from '../constants/planetsConstants'

export const launchRocket = (text) => ({
  type: LAUNCH_ROCKET,
});

export const tick = (timer) => ({
  type : INCREMENT_TIMER,
})

export const loadData = (data) => ({
  type: LOAD,
  launchAngle: data.launchAngle,
  launchVelocity: data.launchVelocity
})
