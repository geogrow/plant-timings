import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
const HelloWorld = ({ name, updateName }) => (
  <div className="container">
    <h3>
      Hello, {this}!
    </h3>
    <hr />
    <form className="form-horizontal">
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        type="text" value={min_long} id="name"
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

HelloWorld.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  updateName: PropTypes.func.isRequired,
  min_long: PropTypes.string.isRequired,
};

export default HelloWorld;
