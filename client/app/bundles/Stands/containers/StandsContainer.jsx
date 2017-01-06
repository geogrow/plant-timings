import React, { PropTypes, Component } from 'react';
import Stands from '../components/Stands';
import _ from 'lodash';

// Simple example of a React "smart" component
export default class StandsContainer extends Component {
  componentDidMount() {
    var map;
    var initial_lat = this.props.areas[0].max_lat;
    var initial_long = this.props.areas[0].max_long;

    map = new google.maps.Map(this.refs.map, {
      center: new google.maps.LatLng(initial_lat,initial_long),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.HYBRID
    });

    google.maps.event.addDomListener(window, "resize", function() {
       var center = map.getCenter();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center);
    });

    _.each(this.props.markers, function(marker) {
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(marker.max_lat, marker.max_long),
            new google.maps.LatLng(marker.min_lat, marker.min_long)
         );
      showRect(map,bounds);
    });

    function showRect(map,bounds){
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
  }

  render() {
    return(
      <div className="map-box">
        <h3>Map</h3>
        <div ref="map" style={{width:'100%', height: 500, border: '1px solid black'}}>
          I am map.
        </div>
      </div>
    );
  }
}
