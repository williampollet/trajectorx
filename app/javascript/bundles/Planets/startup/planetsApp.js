import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/planetsStore';
import SolarSystemContainer from '../containers/SolarSystemContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const PlanetsApp = (props) => (
  <Provider store={configureStore(props)}>
    <SolarSystemContainer />
  </Provider>
);

export default PlanetsApp;
