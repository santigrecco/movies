import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import Index from './components/index/Index';
import Component404 from './components/404Component/404Component';
import MovieDetails from './components/movie_details/MovieDetails';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Store from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}></IndexRoute>
        <Route path="movie-details/:id" component={MovieDetails}></Route>
      </Route>
      <Route path='*' component={Component404} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
