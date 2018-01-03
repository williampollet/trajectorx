import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form'

let LaunchParametersForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='initialAngle'>Initial Angle</label>
      </div>
      <div>
        <label htmlFor='initialVelocity'>Initial Velocity</label>
      </div>
      <button type = 'submit'> update parameters </button>
    </form>
  )
}

LaunchParametersForm = reduxForm({
  form: 'LaunchParametersForm'
})(LaunchParametersForm)

export default LaunchParametersForm
