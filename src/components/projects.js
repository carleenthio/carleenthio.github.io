import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import brick from '../pictures/brick-breaker.jpg'
import lang from '../pictures/language.jpg'
import fudger from '../pictures/fudger.jpg'

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
					<Link to="/fudger" className="nav-grid">
						<img className='img-grid' src={fudger}/>
						Füdger 
					</Link>
					<Link to="/language-learning" className="nav-grid">
						<img className='img-grid' src={lang}/>
						Language Learning Strategized 
					</Link>
					<Link to="/brick-breaker" className="nav-grid"> 
						<img className='img-grid' src={brick}/>
						Brick Breaker: A Shot at Game Development
					</Link>
					<Link to="/mainpage" className="nav-grid">About Me </Link>
					<Link to="/mainpage" className="nav-grid">About Me </Link>
				</Container>
			</Container>
		);
	}
}
export default Projects