import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom"
import './css/index.css'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Mainpage from './components/mainpage'
import Navigationbar from './components/navigationbar'
import Hobbies from './components/hobbies'
import Projects from './components/projects'
import About from './components/about'
import Fudger from './projects/fudger'
import BrickBreaker from './projects/brick-breaker'

class Main extends React.Component { 
  render() {
    return (
      <div className="page_container">
      <a/>
        <div className="main w3-padding-large">
        <Router>
        <Navigationbar/>
          <Switch>
          <Route path="/mainpage" component={Mainpage} />
          <Route path="/projects" component={Projects} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/about" component={About} />
          <Route path="/fudger" component={Fudger} />
          <Route path="/brick-breaker" component={BrickBreaker} />
          </Switch>
        </Router>
        
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
