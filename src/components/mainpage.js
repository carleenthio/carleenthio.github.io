import React from 'react'
import '../css/mainpage.css'
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLongArrowAltRight} from "@fortawesome/pro-light-svg-icons"

class Mainpage extends React.Component {
  render() {
    return (
        <div className='mainpage'>
          {/* <p>Welcome to my page!</p> */}
          <p> 
            This website is designed to act as my portfolio. I built it using React, Javascript, 
            Bootstrap, and CSS.
          </p>
          {/* <p> If you want more info about this site, <a href="projects">click here</a></p> */}
          <LinkContainer to="/projects">
            <span>
              Continue to my projects
              <FontAwesomeIcon className="define-arrow" icon={faLongArrowAltRight}/>
            </span>
          </LinkContainer>
          
        </div>
       
        );
  }
}


export default Mainpage