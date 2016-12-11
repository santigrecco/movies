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

  render() {
    return (
      <div className="App">
        <header className="container-fluid">
          <h1>
            Movies
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
