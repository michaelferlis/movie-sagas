import React, { Component } from 'react';
// import './App.css';
import {connect} from 'react-redux'
import { thisTypeAnnotation } from '@babel/types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class OneMovie extends Component {
    componentDidMount () {
     
    }
  
    getDetails=(action)=> {
      this.props.dispatch({type: 'GET_DETAIL_PAGE',payload: this.props.movie})
      this.props.history.push(`/details`)
      console.log('testing');
      
    }
    // Renders the entire app on the DOM
    render() {
      return (
        <Grid container justify="center">
            <Grid item xs={5}>
            <img
                src={this.props.movie.poster}
                onClick={this.getDetails}
                alt={this.props.movie.title} />
            </Grid>
            <Grid item xs={5}>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
            </Grid>
        </Grid>
      );
    }
  }
  const mapStateToProps= (reduxState) => ({
  reduxState
  })
  
  export default  connect(mapStateToProps)(OneMovie)
  