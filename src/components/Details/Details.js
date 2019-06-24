import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';

class Details extends Component {
  componentDidMount() {
  }
  // Renders the entire app on the DOM
  render() {
    return (
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
    );
  }
}
const mapStateToProps = (reduxState) => ({
  movie: reduxState.selectMovie

})

export default connect(mapStateToProps)(Details)