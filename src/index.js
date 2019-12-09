import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom"
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom'

import Mainpage from './components/mainpage'
import Navigationbar from './components/navigationbar'
import Projects from './components/projects'
import About from './components/about'
import resume from './components/resume'
// Projects
import Fudger from './projects/fudger/fudger'
import BrickBreaker from './projects/brick-breaker'
import LanLearn from './projects/language-learning'

class Main extends React.Component { 
  render() {
    return (
        <div className="main">
          <Router>
            <Navigationbar/>
            <Switch>
              {/* <Route path="/" component={Mainpage} /> */}
              <Route path="/mainpage" component={Mainpage} />
              <Redirect exact from="/" to="/mainpage"/>
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/fudger" component={Fudger} />
              <Route path="/brick-breaker" component={BrickBreaker} />
              <Route path="/language-learning" component={LanLearn} />
              <Route path="/resume" component={resume}/>
            </Switch>
          </Router>
        </div>
    )
  }
}
ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

