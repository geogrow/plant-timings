import React from 'react';
import ReactOnRails from 'react-on-rails';

import StandsContainer from '../containers/StandsContainer';

// _railsContext is the Rails context, providing contextual information for rendering
const StandsApp = (props, _railsContext) => (
  <StandsContainer {...props} />
);

// This is how react_on_rails can see the StandsApp in the browser.
ReactOnRails.register({ StandsApp });

