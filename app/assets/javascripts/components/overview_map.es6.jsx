const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class OverviewMap extends ReactComponent {
  render(){
    return(
      <div style="float:left; display:inline-block;">
        <div id="OverviewMap" style="width:500px;height:300px"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <OverviewMap />,
  document.getElementById('root')
);