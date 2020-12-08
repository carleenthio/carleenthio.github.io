import React from 'react'
import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import '../css/index.css'
import brick from '../pictures/brick-breaker.jpg'
import lang from '../pictures/language.jpg'
import fudger from '../pictures/fudger/axure.jpg'
import kallie from '../pictures/kallie/kallie-icon.png'
import ui from '../pictures/card.png'
class Projects extends React.Component {
	render() {
		return (
			<div className='projects'>
				<h2>Projects</h2>
				<h5 className="sub-heading">
					UX | Game Development | Research
				</h5>
            
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
					<Link to="/UI" className="nav-grid"> 
						<img className='img-grid' alt='Brick breaker logo' src={ui}/>
						UI/UX Compilation
						<hr></hr>
						<p className="project-info" >
							UI and UX are not the same. So here's a compiled UI-focused projects.
						</p>
					</Link>
					<Link to="/brick-breaker" className="nav-grid"> 
						<img className='img-grid' alt='Brick breaker logo' src={brick}/>
						Block Breaker: A Shot at Game Development
						<hr></hr>
						<p className="project-info" >
							All hands on deck! My try with Unity 
						</p>
					</Link>
					<Link to="/kallie" className="nav-grid">
						<img className='img-grid' alt='Kallie logo' src={kallie}/>
						[WIP] Kallie: UX Research & Design 
						<hr></hr>
						<p className="project-info">
							An updated calendars that reduces users'
							cognitive load
						</p>
					</Link>
					<Link to="/language-learning" className="nav-grid">
						<img className='img-grid' alt='Language learning logo' src={lang}/>
						Language Learning Strategized! 
						<hr></hr>
						<p className="project-info" >
							A research project into an alternative language learning tactic 
							based on proficieny level
						</p>
					</Link>
					
					
					</Container>
				
			</div>
			
		);
	}
}
export default Projects