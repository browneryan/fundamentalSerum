/*
  Dependencies
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import autobind from 'autobind-decorator';

/*
  Components
*/
import App from './components/App';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import h from './helpers';

/*
  Routes
*/
var routes = (
    <Router history={createHistory()}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
ReactDOM.render(<Navigation />, document.querySelector('#nav'));
ReactDOM.render(<Footer />, document.querySelector('#footer'));
