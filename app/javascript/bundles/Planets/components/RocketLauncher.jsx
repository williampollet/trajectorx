import PropTypes from 'prop-types';
import React from 'react';

export default class RocketLauncher extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */

   constructor(props) {
     super(props);
   }

   handleClick = () => {
     this.props.launchRocket()
     setInterval(
       () => {
         this.props.tick()
       },
     1000)
   }

   render() {
     return (
      <button onClick={ this.handleClick }>
        Launch the rocket!
      </button>
     )
   }
}
