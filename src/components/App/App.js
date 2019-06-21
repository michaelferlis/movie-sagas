import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount () {
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    })
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      {JSON.stringify(this.props, null, 2)}
        <p>Empty Page</p>
      </div>
    );
  }
}
const mapStateToProps= (reduxState) => ({
reduxState
})

export default  connect(mapStateToProps)(App)
