import { connect } from 'react-redux';

// importation of the dry component
import RocketLauncher from '../components/RocketLauncher'
// importation of the reducers
import * as actions from '../actions/planetsActionCreators';

// no hydratation necessary here as the button launcher does not need access to state
export default connect()(RocketLauncher);
