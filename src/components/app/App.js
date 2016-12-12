import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadLocalStorage } from '../../actions/movies';
//styles

import './App.scss';

@connect( (store) =>{
  return {
    store:store
  }
})
class App extends Component {
  componentWillMount(){
    // console.log(this.props);
    this.props.dispatch(loadLocalStorage());
  }
  getMovie(id){
    return this.props.store[id];
  }

  header(){
    let { location } = this.props;
    let { params } = this.props;
    let { pathname } = location;
    let movie = this.getMovie.call(this, params.id);
    let name;
    if(movie)
     name = movie.name
    // let name = movie.name;
    if(pathname === '/'){
      return 'Movies';
    }
    else if(pathname.indexOf('/movie_details') != 0){
      return (
        <div>
          <div className="title"> Movies </div> / <div className="movieId" >{name}</div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <header className="container-fluid">
          <h1>
            {this.header.call(this)}
          </h1>
        </header>
        <div className="content">
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
