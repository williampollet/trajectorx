import { connect } from 'react-redux';

// importation of the dry component
import SolarSystem from '../components/SolarSystem'
// importation of the reducers
import * as actions from '../actions/planetsActionCreators';

const mapStateToProps = (state) => ({ rocket_status: state.rocket_status });

// no hydratation necessary here as the button launcher does not need access to state
export default connect(mapStateToProps, actions)(SolarSystem);
