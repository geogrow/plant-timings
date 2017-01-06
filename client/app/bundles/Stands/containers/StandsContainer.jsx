import React, { PropTypes, Component } from 'react';
import Stands from '../components/Stands';

// Simple example of a React "smart" component
export default class StandsContainer extends Component {
  render() {
    const areas = this._getAreas() || [];

    return(
      <div className="comment-box">
        <h3>Areas</h3>
        <h4 className="comment-count">{areas.length} stand areas</h4>
        <div className="comment-list">
          {areas}
        </div>
      </div>
    );
  }

  _getAreas() {
    const areasList = [
      { id: 1, max_long: -2.243269, min_long: -2.241, max_lat: 54.218, min_lat: 54.2168 },
      { id: 2, max_long: -2.24532, min_long: -2.243269, max_lat: 54.217341, min_lat: 54.215935 },
      { id: 3, max_long: -2.25532, min_long: -2.253269, max_lat: 54.227341, min_lat: 54.225935 },
    ];

    return areasList.map((area) => {
      return (
        <Area
          max_long={area.max_long} min_long={area.min_long} max_lat={area.max_lat} min_lat={area.min_lat} />
      );
    });  
  }

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { min_long: this.props.min_long };
  }
}

class Area extends Component {
  render() {

    var map;

    var mapOptions = {
      center: new google.maps.LatLng( this.props.max_lat, this.props.max_long ),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    map = new google.maps.Map(document.getElementById('OverviewMap'), mapOptions);
    google.maps.event.addDomListener(window, "resize", function() {
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center);
    });

    console.log('erm' + " " + this.props.max_lat);

    for (var i = 0; i < 2; i++) {
      console.log("not even being run");

      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(this.props.max_lat, this.props.max_long),
          new google.maps.LatLng(this.props.min_lat, this.props.min_long)
       );

      showRect(map,bounds);
    };

    function showRect(map,bounds){
      // Define the rectangle and set its editable property to true.
      var rectangle = new google.maps.Rectangle({
        bounds: bounds,
        strokeColor: '#FF0000',
        fillColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillOpacity: 0.35,
      });
      rectangle.setMap(map);
      return rectangle;
    }

    return(
      <div className="comment">
        <p className="comment-header">{this.props.max_lat}, {this.props.max_long}</p>
      </div>
    );
  }
}
