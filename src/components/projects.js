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
				<Container className='grid-container'>
					<Link to="/fudger" className="nav-grid">
						<img className='img-grid' alt='Fudger logo' src={fudger}/>
						Füdger: UX Research & Design 
						<hr></hr>
						<p className="project-info">
							An inventory & grocery tracker to help reduce food waste
							at the consumer level
						</p>
					</Link>
					<Link to="/language-learning" className="nav-grid">
						<img className='img-grid' alt='Language learning logo' src={lang}/>
						Language Learning Strategized! 
						<hr></hr>
						<p className="project-info" >
							A look into an alternative language learning tactic 
							based on proficieny level
						</p>
					</Link>
					<Link to="/brick-breaker" className="nav-grid"> 
						<img className='img-grid' alt='Brick breaker logo' src={brick}/>
						Brick Breaker: A Shot at Game Development
						<hr></hr>
						<p className="project-info" >
							Hands on deck! Trying out Unity. 
						</p>
					</Link>
					</Container>
				
			</div>
			
		);
	}
}
export default Projects