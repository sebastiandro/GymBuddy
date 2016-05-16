var GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.LIBRARIES = ['places'];
GoogleMapsLoader.LANGUAGE = 'sv';
GoogleMapsLoader.KEY = 'AIzaSyDsf_2qw33ligN_llmhuMI0p-3b9yAQVpA';

import React from 'react';

const Gym = React.createClass({
    render: function() {
      return <li>{this.props.name}</li>
    }
});

const GymsNearby = React.createClass ({

  construct: function() {
    this.super();
    this.fetchGymsFromResults.bind(this);
  },
  getInitialState: function(){
    return {
      gyms: []
    }
  },

  componentWillReceiveProps: function(nextProps) {
    nextProps.lat;
    nextProps.lng;
    this.getNearbyPlaces(nextProps.lat, nextProps.lng);
  },

  getNearbyPlaces: function(lat, lng, callback) {
    var self = this;
    GoogleMapsLoader.load(function(google) {
      var gps = new google.maps.LatLng(lat,lng);

      var request = {
        location: gps,
        //radius: 10000,
        types: ['gym'],
        rankBy: google.maps.places.RankBy.DISTANCE,
        key: GoogleMapsLoader.key
      };


      var service = new google.maps.places.PlacesService(map);
      service.search(request, self.fetchGymsFromResults);
    });
  },
  fetchGymsFromResults: function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.setState({
        gyms: results
      });
    } else {
      console.error(status);
    }
  },
  render() {
    console.log(this.state.gyms);
    return (
      <div>
        {this.props.lat} - {this.props.lng}
        {this.state.gyms.map(function(results) {
          return <Gym key={results.id} name={results.name} />;
        })}
        <div id="map"></div>
      </div>
    );
  },
});

export default GymsNearby;
