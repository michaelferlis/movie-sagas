import React, { Component } from 'react';
// import './App.css';
import {connect} from 'react-redux'

class Details extends Component {
  componentDidMount () {
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      {/* {JSON.stringify(this.props, null, 2)} */}
        <p>Details</p>
      </div>
    );
  }
}
const mapStateToProps= (reduxState) => ({
reduxState
})

export default  connect(mapStateToProps)(Details)