import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import '../css/mainpage.css'

class Mainpage extends React.Component {
  render() {
    return (
        <div className='main-container'>
        <p>Welcome to my page. This website is designed to act as my portfolio. It is coded using React, Javascript, HTML, and CSS by yours truly.
        </p>
        <p>Yes, I am aware it is very minimal.</p>
        <a href="projects" class="btn btn-secondary active" role="button" aria-pressed="true">Continue</a>
        </div>
        );
  }
}


export default Mainpage