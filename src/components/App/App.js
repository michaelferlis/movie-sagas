import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../Home/Home.js'
import Details from '../Details/Details.js'
import Edit from '../Edit/Edit.js'
class App extends Component {
  // componentDidMount () {
  //   this.props.dispatch({
  //     type: 'FETCH_MOVIES'
  //   })
  //   this.props.dispatch({
  //     type: 'FETCH_GENRES'
  //   })
  // }
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>

      
      
      <div className="App">
      {/* {JSON.stringify(this.props, null, 2)} */}
        <p>Saga Movie Weekend</p>
        
        <Route path="/" exact={true} component={Home} />
        
      <Route path="/details" component={Details} />
    
      <Route path="/edit" component={Edit} />
        
      </div>
    </Router>
    );
  }
}
const mapStateToProps= (reduxState) => ({
reduxState
})

export default  connect(mapStateToProps)(App)
