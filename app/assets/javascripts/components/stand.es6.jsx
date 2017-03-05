class Stand extends React.Component {
  render () {
    return (
      <div>
        <p> <b>Max Lat (north)</b>: {this.props.max_lat} </p>
        <p> <b>Min Lat (south)</b>: {this.props.min_lat} </p>
        <p> <b>Max Long (west)</b>: {this.props.max_long} </p>
        <p> <b>Min Long (east)</b>: {this.props.min_long} </p>
      </div>
    );
  }
}
