import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { BrowserRouter, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);