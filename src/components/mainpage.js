import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import '../css/mainpage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLongArrowAltRight} from "@fortawesome/pro-light-svg-icons"

class Mainpage extends React.Component {
  render() {
    return (
        <div className='main-container'>
          <p>Welcome to my page</p>
          <p> This website is designed to act as my portfolio. I built it using React, Javascript, 
            Bootstrap,and CSS.
          </p>
          <p> If you want more info about this site, <a href="projects">click here</a></p>

          {/* <div className="div-arrows"> */}
          <a href="projects">
            <p>Continue to my projects</p>
            
            <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/>
            
          </a>
          
          {/* </div> */}
        </div>
        );
  }
}


export default Mainpage