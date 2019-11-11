import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <header className="w3-container w3-padding-32 w3-center" id="home">
        <h1 className="w3-jumbo">Sharene Carleen Thio</h1>
      </header>
    );
  }
}


export default Header