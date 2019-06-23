import React, { Component } from 'react';
// import './App.css';
import {connect} from 'react-redux'
import { thisTypeAnnotation } from '@babel/types';
import Button from '@material-ui/core/Button';

class Home extends Component {
  componentDidMount () {
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    })
    this.props.dispatch({
      type: 'FETCH_GENRES'
    })
  }

  getDetails=(action)=> {
    // this.props.dispatch({type: 'GET_DETAIL_PAGE',payload: this.props.movie})
    this.props.history.push(`/details`)
    console.log('testing');
    
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      {/* {JSON.stringify(this.props, null, 2)} */}
        <p>Home</p>
        <ul onclick={this.getDetails} >
            
            {this.props.reduxState.movies.map(movie =>
            
                <li key={movie.id}><img onClick={this.getDetails} src={movie.poster}/>
                <h2>{movie.title}</h2>{movie.description}<li></li>
                <Button size="small" onClick={this.getDetails}>
                            Details
                        </Button></li>
                )}
            
        </ul>
      </div>
    );
  }
}
const mapStateToProps= (reduxState) => ({
reduxState
})

export default  connect(mapStateToProps)(Home)

