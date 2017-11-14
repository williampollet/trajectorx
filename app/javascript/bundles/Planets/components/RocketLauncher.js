import PropTypes from 'prop-types';
import React from 'react';
import launchRocket from '../constants/planetsActionCreators';

export default class RocketLauncher extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */

   constructor(props) {
     super(props);
   }

   render() {
     return (
      <button onClick={() => {
        dispatch(launchRocket())
      }}>
        Launch the rocket!
      </button>
     )
   }
}
