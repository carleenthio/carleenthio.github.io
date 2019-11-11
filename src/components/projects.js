import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/projects.css'


class Projects extends React.Component {
	render() {
		return ( 
			<Container className='grid-container'>
				<Link to="/fudger" className="nav-grid">Füdger </Link>
				<Link to="/mainpage" className="nav-grid">About Me </Link>
				<Link to="/mainpage" className="nav-grid">About Me </Link>
				<Link to="/mainpage" className="nav-grid">About Me </Link>
				<Link to="/mainpage" className="nav-grid">About Me </Link>
			</Container>
		);
	}
}
export default Projects