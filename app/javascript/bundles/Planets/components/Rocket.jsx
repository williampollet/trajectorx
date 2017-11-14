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
    this.state = { rocket_status: this.props.rocket_status };
  }

  render() {
    return (
      <div>
        Hello, Will, the status of the rocket is {this.state.rocket_status}
      </div>
    );
  }
}
