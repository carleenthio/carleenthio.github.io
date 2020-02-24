import React from 'react'
import '../css/mainpage.css'
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLongArrowAltRight} from "@fortawesome/pro-light-svg-icons"
import Navigationbar from './navigationbar'
class Mainpage extends React.Component {
  render() {
    return (
      <div className='mainpage-container'>
        {/* <Navigationbar/> */}
        <container className='mainpage'>
          {/* <p>Welcome to my page!</p> */}
          <p className="p-role">UX Designer & Content Writer</p>
          <p> 
            I use human-centered design to create beautiful user experiences
            and write with an appreciation for the power of language
          </p>
          {/* <p> If you want more info about this site, <a href="projects">click here</a></p> */}
          <LinkContainer to="/projects">
            <span>
            <button className="buttonpage">
              To my projects!
              {/* <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/> */}
              </button>
            </span>
          </LinkContainer> 
        </container>
        <p className="made-by">
          React | CSS | HTML
          <br></br>
          Designed and built by yours truly
          
        </p>
        </div>
       
        );
  }
}


export default Mainpage