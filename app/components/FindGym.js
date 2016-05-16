import React, { PropTypes } from 'react';
import GymsNearby from './GymsNearby';
import { Router, withRouter } from 'react-router';


const FindGym = withRouter(
  React.createClass({
    construct: function() {
      this.super()
    },
    getInitialState: function() {
      return {
        lat: 0,
        lng: 0
      };
    },
    getGeoLocation: function() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      }
    },
    showPosition: function(position) {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    },
    componentDidMount: function() {
      this.getGeoLocation();
    },
    render: function() {
      return (
        <div>
          <p className="info">Looking for gyms...</p>
          <GymsNearby lat={this.state.lat} lng={this.state.lng} />
        </div>
      )
    }
  })
)

export default FindGym
