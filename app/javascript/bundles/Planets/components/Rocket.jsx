import PropTypes from 'prop-types';
import React from 'react';

export default class Rocket extends React.Component {
  static propTypes = {
    rocket_status: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      initial_inclination: this.props.initial_inclination,
      speed: this.props.speed,
      x: this.props.x,
      y: this.props.y,
    };
  }

  update_position = () => {
    this.setState({
      x: this.state.x + speed * this.props.time_interval,
      y: this.state.y + speed * this.props.time_interval
    })

    console.log(this.state.x)
    console.log(this.state.y)
  }

  render() {
    return (
      <div>
        Hello, Will, the status of the rocket is {this.props.rocket_status}
      </div>
    );
  }
}
