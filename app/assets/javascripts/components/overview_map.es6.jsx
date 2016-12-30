class OverviewMap extends ReactComponent {
  render(){
    return(
      <div style="float:left; display:inline-block;">
        ffff
        <div id="OverviewMap" style="width:500px;height:300px"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <OverviewMap />,
  document.getElementById('OverviewMap')
);