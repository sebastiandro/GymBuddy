import React, { PropTypes } from 'react';
import GymsNearby from './GymsNearby';
import { Router } from 'react-router';

class FindGym extends React.Component {

  construct() {
    this.super()

    this.setState({
      gyms: [{name: "abc"}]
    });

  }

  render () {
    return (
      <div>
        <p className="info">Looking for gyms...</p>

      </div>
    )
  }
}

export default FindGym;
