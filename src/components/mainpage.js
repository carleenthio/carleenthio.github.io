import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'

class Mainpage extends React.Component {
  render() {
    return (
        <Container>
        <p>Welcome to my page. This website is designed to act as my portfolio. It is coded using React, Javascript, HTML, and CSS by yours truly.</p>
        <p></p>
        </Container>
        );
  }
}


export default Mainpage