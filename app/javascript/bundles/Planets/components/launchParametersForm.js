import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form'

export default class LaunchParametersForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const { handleSubmit } = this.props

    return (
      <form onSubmit = {handleSubmit} >
        <div>
          <label htmlFor='launchAngle'>Initial Angle</label>
          <Field
            parse={value => Number(value)}
            name='launchAngle'
            component='input'
            type='number'
          />
        </div>
        <div>
          <label htmlFor='launchVelocity'>Initial Velocity</label>
          <Field
            parse={value => Number(value)}
            name='launchVelocity'
            component='input'
            type='number'
          />
        </div>
        <button type = 'handleSubmit'> update parameters </button>
      </form>
    )
  }
}
