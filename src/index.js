import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as HashRouter, Router, Route, Switch} from "react-router-dom"
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom'

import Mainpage from './components/mainpage'
import Navigationbar from './components/navigationbar'
import Projects from './components/projects'
import About from './components/about'
import resume from './components/resume'
import Writing from './components/writing'
// Projects
import Fudger from './projects/fudger/fudger'
import BrickBreaker from './projects/brick-breaker'
import LanLearn from './projects/language-learning'
import Kallie from './projects/kallie'

//Writing
import uxWrite from './writing/ux-writing'
import ostara from './writing/ostara'

import forbidden from './inform-user/inProgress'

class Main extends React.Component { 
  render() {
    return (
        <div className="main">
          {/*
          Makes sure refreshing page doesn't end up with E404.
          But it is a quick fix
           https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2 */}
          <HashRouter basename="/#">
            <Navigationbar/>
            <Switch>
              {/* <Route path="/" component={Mainpage} /> */}
              <Route path="/mainpage" component={Mainpage} />
              <Redirect exact from="/" to="/mainpage"/>
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={resume}/>
              <Route path="/writing" component={Writing} />
              <Route path="/fudger" component={Fudger} />
              <Route path="/kallie" component={Kallie} />
              <Route path="/brick-breaker" component={BrickBreaker} />
              <Route path="/language-learning" component={LanLearn} />
              <Route path="/ux-writing" component={uxWrite}/>
              <Route path="/ostara" component={ostara}/>
              <Route path="/forbidden" component={forbidden}/>
              <Redirect to="/mainpage" />

            </Switch>
          </HashRouter>
        </div>
    )
  }
}
ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

