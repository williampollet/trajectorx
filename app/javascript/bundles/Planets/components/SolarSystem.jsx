import PropTypes from 'prop-types';
import React from 'react';
import RocketLauncherContainer from '../containers/RocketLauncherContainer'
import RocketContainer from '../containers/RocketContainer'


export default class SolarSystem extends React.Component {
  /**
   * @param props - Comes from your rails view.
   */

   constructor(props) {
     super(props);
   }

   render() {
     return (
       <div>
         <RocketContainer />
         <RocketLauncherContainer />
       </div>
     )
   }
}
