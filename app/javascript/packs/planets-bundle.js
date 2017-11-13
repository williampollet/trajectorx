import ReactOnRails from 'react-on-rails';

import PlanetsApp from '../bundles/Planets/startup/PlanetsApp';

// This is how react_on_rails can see the planets in the browser.
ReactOnRails.register({
  PlanetsApp,
});
