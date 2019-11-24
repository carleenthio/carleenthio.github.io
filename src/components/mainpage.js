import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import '../css/mainpage.css'

class Mainpage extends React.Component {
  render() {
    return (
        <div className='main-container'>
        <p>Welcome to my page</p>
        <p> This website is designed to act as my portfolio. I built it using React, Javascript, 
          Bootstrap, HTML,and CSS.
        </p>
        <p> If you want more info about this site, <a href="projects">click here</a></p>
        {/* <p>And yes, I am aware it is very minimal.</p> 
        {/* <a href="projects" class="btn btn-secondary active" role="button" aria-pressed="true">More about this site</a>
        <a href="projects" class="btn btn-secondary active" role="button" aria-pressed="true">Continue to projects</a> */}
        </div>
        );
  }
}


export default Mainpage