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
          <div className="homeView col-md-8 col-md-offset-2">
            <h2 className="text-center">GymBuddy helps you find friends.</h2>
            <h3 className="text-center">Find friends who go to the same gym as you. And then you can hit on something.
    But Jesus Crust please do not stalk them or anything like that</h3>
            <button onClick={() => this.handleSubmit()} className="centered find-buddy-btn">Find me a GymBuddy!</button>
          </div>
        )
      }
  })
)

Home.PropTypes = {
  history: React.PropTypes.object.isRequired
}

module.exports = Home;
