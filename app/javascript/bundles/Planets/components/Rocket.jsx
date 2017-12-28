import PropTypes from 'prop-types';
import React from 'react';
import Math from 'mathjs'

export default class Rocket extends React.Component {
  static propTypes = {
    rocketStatus: PropTypes.string.isRequired, // this is passed from the Rails view
    launchAngle: PropTypes.number.isRequired,
    launchVelocity: PropTypes.number.isRequired,
    timer: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
  }

  time = () => {
    return this.props.timer / 100
  }

  calculatedX = () => {
    const launchAngle = this.props.launchAngle * 3.1415926 / 180
    return Math.cos(launchAngle) * this.time() * this.props.launchVelocity
  }

  calculatedY = () => {
    const launchAngle = this.props.launchAngle * 3.1415926 / 180
    return Math.sin(launchAngle) * this.time() * this.props.launchVelocity - 9.8 * Math.square(this.time()) / 2
  }

  render() {
    const rocketStyle = {
      margin: '10px',
      backgroundColor: '#FFDE00',
      color: '#333',
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: '32px',
      textAlign: 'center',
      position: 'absolute',
      left: this.calculatedX(),
      bottom: this.calculatedY(),
    }

    return (
      <div style = { rocketStyle }>
        🚀
      </div>
    );
  }
}
