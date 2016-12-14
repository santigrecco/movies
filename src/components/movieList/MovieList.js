import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './movieList.scss';

@connect((store)=>{
  return {
    store:store
  }
})
class MovieList extends Component{
  render(){
    // let list = '';
    const { store } = this.props;
    const list = store.map(el => {
      if(el){
        return (
          <Link to={`/movie-details/${el.id}`} key={el.id} style={{ textDecoration: 'none' }}>
            <blockquote>
              <li key={el.id}>
                <b>{el.name}</b>
                <p>{el.year}</p>
              </li>
            </blockquote>
          </Link>
        )
      }
    });

    return (
      <div className="MovieList">
        <h2>Movies</h2>
        <ul>
          {list}
        </ul>
      </div>
    )
  }

}

export default MovieList;
