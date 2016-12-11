import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <blockquote key={el.id}>
            <li key={el.id}>
              <b>{el.name}</b>
              <p>{el.year}</p>
            </li>
          </blockquote>
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
