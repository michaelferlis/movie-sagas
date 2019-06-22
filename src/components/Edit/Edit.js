import React, { Component } from 'react';
// import './App.css';
import {connect} from 'react-redux'

class Edit extends Component {
  componentDidMount () {

  }
  handleClickCancel =()=>{
    // console.log('Animals are great!');
    this.props.history.push('/details')
    
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      {/* {JSON.stringify(this.props, null, 2)} */}
        <p>Edit page</p>
        <button onClick={this.handleClickCancel}>Cancel</button>
      </div>
    );
  }
}
const mapStateToProps= (reduxState) => ({
reduxState
})

export default  connect(mapStateToProps)(Edit)