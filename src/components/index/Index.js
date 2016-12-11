import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/movies';
import MovieList from '../movieList/MovieList';
import './index.scss'

@connect(store=>{
  return {
    store:store
  }
})
class Index extends Component {
  render(){
    const { store } = this.props;
    return (
      <div className="Index-route">
        <form className="index-form col-md-6" action="#" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Add new Movie</h2>
          <p>
            <label>Name</label><br/>
            <input type="text" required ref="name" name="name" />
          </p>
          <p>
            <label>Year</label><br/>
            <input type="number" required  ref="year" name="year"/>
          </p>
          <p>
            <label>Summary</label><br/>
            <textarea rows="5" id="textarea" ref="summary" name="Summary" />
          </p>
          <button type="submit" name="button" className="btn " >Add Movie</button>
        </form>
        <div className="movies-section col-md-6">
          <MovieList></MovieList>
        </div>
      </div>
    )
  }
  handleSubmit(e){
    e.preventDefault();
    let { dispatch } = this.props;
    let { name, year, summary } = this.refs;
    this.props.dispatch(actions.addMovie(name.value, year.value, summary.value));
  }
}

export default Index;
