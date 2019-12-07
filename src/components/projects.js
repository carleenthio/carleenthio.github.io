import React from 'react'
import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import brick from '../pictures/brick-breaker.jpg'
import lang from '../pictures/language.jpg'
import fudger from '../pictures/axure.jpg'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class Projects extends React.Component {
	render() {
		return (
			<div className='projects'>
				<h3>Projects</h3>
				<hr></hr>
				{/* <Breadcrumb>
					<Breadcrumb.Item active>Projects</Breadcrumb.Item>
				</Breadcrumb> */}
				<Container className='grid-container'>
					<Link to="/fudger" className="nav-grid">
						<img className='img-grid' src={fudger}/>
						Füdger: Inventory & Grocery Tracker
						<p style={{color:'#A8A8A8'}} >A UX Project</p>
					</Link>
					<Link to="/language-learning" className="nav-grid">
						<img className='img-grid' src={lang}/>
						Language Learning Strategized 
					</Link>
					<Link to="/brick-breaker" className="nav-grid"> 
						<img className='img-grid' src={brick}/>
						Brick Breaker: A Shot at Game Development
					</Link>
					</Container>
			</div>
			
		);
	}
}
export default Projects