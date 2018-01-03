import PropTypes from 'prop-types';
import React from 'react';
import RocketLauncherContainer from '../containers/RocketLauncherContainer'
import RocketContainer from '../containers/RocketContainer'
import Clock from '../containers/ClockContainer'
import LaunchParametersFormContainer from '../containers/LaunchParametersFormContainer'

export default class Earth extends React.Component {
   constructor(props) {
     super(props);
   }

   submit = (data) => {
     this.props.loadData({
       launchAngle: data.launchAngle,
       launchVelocity: data.launchVelocity,
     })
   }

   render() {
     return (
       <div>
         <Clock />
         <RocketContainer />
         <LaunchParametersFormContainer onSubmit={this.submit} />
         <RocketLauncherContainer />
       </div>
     )
   }
}
