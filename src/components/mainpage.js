import React from 'react'
import '../css/mainpage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LinkContainer } from "react-router-bootstrap";
import r1 from '../pictures/reviews/r1.png'
import r2 from '../pictures/reviews/r2.png'
import r3 from '../pictures/reviews/r3.png'
import r4 from '../pictures/reviews/r4.png'
import r5 from '../pictures/reviews/r5.png'
import {faChevronDoubleDown} from "@fortawesome/pro-duotone-svg-icons"
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
        {/* <a href= '#review-section' className="scroll-down">
          <FontAwesomeIcon className="down-icon" icon={faChevronDoubleDown}/>
          Reviews
          <FontAwesomeIcon className="down-icon" icon={faChevronDoubleDown}/>
        </a> */}
        <div className="review-section" id="review-section">
        <h2>Client Reviews</h2>
        
        <div className="reviews">
          <div className='writing-reviews'> <img  alt='review from editing book' src={r1}/></div>
          <div className='writing-reviews'> <img alt='review from editing book' src={r2}/></div>
          <div className='writing-reviews'> <img  alt='review from editing book' src={r3}/></div>
          <div className='writing-reviews'> <img className='writing-reviews'src={r5}/></div>
        </div>
        </div>
      </div>
      );
  }
}


export default Mainpage