import PropTypes from 'prop-types';
import React from 'react';

export default class Clock extends React.Component {
  static propTypes = {
    timer: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
  }

  currentTime = () => {
    return this.props.timer / 100
  }

  render() {
    return (
      <div>
        Time is now: { this.currentTime() }
      </div>
    );
  }
}
