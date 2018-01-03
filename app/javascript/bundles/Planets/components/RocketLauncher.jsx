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
     10)
   }

  render() {
    const rocketLauncherStyle = {
      bottom: '0',
      position: 'fixed',
      width: '100%',
      backgroundColor: 'green',
    }

    return (
      <div style = { rocketLauncherStyle } >
        <button onClick={ this.handleClick }>
          Launch the rocket!
        </button>
      </div>
    )
  }
}
