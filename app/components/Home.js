import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <div className="homeView col-md-8 col-md-offset-2">
        <h2 className="text-center">GymBuddy helps you find friends.</h2>
        <h3 className="text-center">Find friends who go to the same gym as you. And then you can hit on something.
But Jesus Crust please do not stalk them or anything like that</h3>
        <button className="centered find-buddy-btn">Find me a GymBuddy!</button>
      </div>
    )
  }
}

export default Home;
