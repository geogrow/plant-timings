import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
const Stands = ({ min_long }) => (
  <div className="container">
    <h3>
      Helloing, {min_long}!
    </h3>
    <hr />
    <form className="form-horizontal">
      <label htmlFor="min_long">
        Say hello to:
      </label>
      <input
        type="text" value={min_long} id="min_long"
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

Stands.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  updateName: PropTypes.func.isRequired,
  min_long: PropTypes.string.isRequired,
};

export default Stands;
