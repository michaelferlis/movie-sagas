import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Details extends Component {
  componentDidMount() {
  }
  handleClick = () =>{
    this.props.history.push(`/edit`)
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
      <Button size="small" onClick={this.handleClick}>
        Edit
                        </Button>
                       
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
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  movie: reduxState.selectMovie

})

export default connect(mapStateToProps)(Details)