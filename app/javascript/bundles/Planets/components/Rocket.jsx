import PropTypes from 'prop-types';
import React from 'react';

export default class Rocket extends React.Component {
  static propTypes = {
    rocket_status: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        The status of the rocket is {this.props.rocket_status}
      </div>
    );
  }
}
