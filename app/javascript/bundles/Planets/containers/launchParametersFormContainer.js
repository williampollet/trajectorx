import { connect } from 'react-redux';
import * as actions from '../actions/planetsActionCreators';
import LaunchParametersForm from '../components/LaunchParametersForm'
import { reduxForm } from 'redux-form'

const mapStateToProps = (state) => ({
  initialValues: {
    launchVelocity: state.launchVelocity,
    launchAngle: state.launchAngle,
  },
  launchVelocity: state.launchVelocity,
  launchAngle: state.launchAngle,
})

const launchParametersFormContainer = reduxForm({
  form: 'LaunchParametersForm'
})(LaunchParametersForm)

export default connect(
  mapStateToProps,
  actions
)(launchParametersFormContainer)
