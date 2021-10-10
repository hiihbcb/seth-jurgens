/**
* @Author HIIHBCB
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './css/index.css';

import Homepage from './pages/Homepage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
