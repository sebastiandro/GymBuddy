import React, {PropTypes} from 'react'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';


const Home = withRouter(
  React.createClass({

      construct: function() {
        this.super();
      },

      contextTypes: function() {
        route: React.PropTypes.object
      },

      getContext: function() {
        return {
          route: this.props.route
        }
      },

      handleSubmit: function() {
        this.props.router.push('find-gyms/')
      },

      render: function(){
        return (
          <div className="homeView blue-box col-md-6 col-md-offset-3">
            <h2 className="text-center">Find a spotter with</h2>
            <h1 className="text-center">Gymbuddy</h1>
            <p className="description">We believe “work” and “fun” can get along, afterall. So we'll make sure the experience you have with.</p>
            <div className="btn-bg-wrap">
                <button onClick={() => this.handleSubmit()} className="centered btn btn-outline">Find me a GymBuddy!</button>
            </div>
          </div>
        )
      }
  })
)

Home.PropTypes = {
  history: React.PropTypes.object.isRequired
}

module.exports = Home;
