import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FlipCardList from './comps/FlipCardList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './comps/NavBar'
import About from './comps/About'
import Nopage from './comps/Nopage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route  exact path='/' component={App}/>
        <Route path='/FlipCardList' component={FlipCardList}/>
        <Route path='/About' component={About}/>
        <Route path='*' component={Nopage}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


if(module.hot){
  module.hot.accept()
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

