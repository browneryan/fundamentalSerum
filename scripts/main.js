/*
  Dependencies
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

/*
  Components
*/
import App from './components/App';


class Navigation extends React.Component {

  render() {
    return (
      <p>Navigation</p>
    )
  }

}

class Footer extends React.Component {

  render() {
    return (
      <p>Footer</p>
    )
  }

}

/*
  Routes
*/
var routes = (
    <Router history={createHistory()}>
      <Route path="/" component={App} />
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
ReactDOM.render(<Navigation />, document.querySelector('#nav'));
ReactDOM.render(<Footer />, document.querySelector('#footer'));
