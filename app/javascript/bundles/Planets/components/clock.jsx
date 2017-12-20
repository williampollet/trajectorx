import PropTypes from 'prop-types';
import React from 'react';

export default class Clock extends React.Component {
  static propTypes = {
    timer: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Time is now: {this.props.timer}
      </div>
    );
  }
}
