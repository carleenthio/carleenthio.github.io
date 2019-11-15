import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/projects.css'


class Projects extends React.Component {
	render() {
		return (
			<Container className='contents'>
				<nav aria-label="breadcrumb" color='white'>
					<ol class="breadcrumb">
						<li class="breadcrumb-item active" aria-current="page">Projects</li>
					</ol>
				</nav>
				<Container className='grid-container'>
					<Link to="/fudger" className="nav-grid">Füdger </Link>
					<Link to="/mainpage" className="nav-grid">Language Learning </Link>
					<Link to="/brick-breaker" className="nav-grid">Brick Breaker</Link>
					<Link to="/mainpage" className="nav-grid">About Me </Link>
					<Link to="/mainpage" className="nav-grid">About Me </Link>
				</Container>
			</Container>
		);
	}
}
export default Projects