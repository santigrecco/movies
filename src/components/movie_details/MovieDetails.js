import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieDetails.scss'

@connect((store)=>{
  return {
    store:store
  }
})
class MovieDetails extends Component {

  componentWillMount(){

  }

  getData(){
    const { store, params } = this.props;
    const data = store[params.id];
    if(data){
      return data;
    }else{
      return ''
    }
  }

  render(){

    return (
      <div className="MovieDetails">
        <h2 className="name">{this.getData.call(this).name}</h2>
        <div className="year">{this.getData.call(this).year}</div>
        <p className="summary">{this.getData.call(this).summary}</p>
      </div>
    )
  }
}

export default MovieDetails;
