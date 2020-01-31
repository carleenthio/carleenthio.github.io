import React from 'react'
import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import brick from '../pictures/brick-breaker.jpg'
import lang from '../pictures/language.jpg'
import fudger from '../pictures/axure.jpg'

class Projects extends React.Component {
	render() {
		return (
			<div className='projects'>
				<h3>Projects</h3>
				<hr></hr>
				<Container className='grid-container'>
					<Link to="/fudger" className="nav-grid">
						<img className='img-grid' alt='Fudger logo' src={fudger}/>
						Füdger: Inventory & Grocery Tracker
						<p style={{color:'#A8A8A8'}} >A UX Project</p>
					</Link>
					<Link to="/language-learning" className="nav-grid">
						<img className='img-grid' alt='Language learning logo' src={lang}/>
						Language Learning Strategized 
					</Link>
					<Link to="/brick-breaker" className="nav-grid"> 
						<img className='img-grid' alt='Brick breaker logo' src={brick}/>
						Brick Breaker: A Shot at Game Development
					</Link>
					</Container>
			</div>
			
		);
	}
}
export default Projects