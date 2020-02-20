import React from 'react'
import Container from 'react-bootstrap/Container'
import '../css/projects.css'
import { Table } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import kallietemp from '../pictures/kallie/kallie-overview-jan.png'
class Kallie extends React.Component {    
	render() {
		return (
			<div className='kallie'>
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>Kallie</Breadcrumb.Item>
                </Breadcrumb>
                
                {/* page content */}
                <Container>
                    <h1>[WIP] Kallie: Reinventing Calendars</h1>
                    <br></br>
                    <h2>Project Snapshot</h2>
                    
                    <div className="row">
                        <div className="column"><h4>The Problem</h4>
                        <p>
                            I noticed a problem in the plant and trading community in Toronto. 
                            Both people who had few or lots of trades had trouble keeping up with 
                            date trades. Even if they had alternatives like pen and paper or their 
                            phone calendars.
                        </p>
                        
                        <h4>Objective</h4>
                        <p>
                            To identify a root cause for the failure of the currently 
                            available scheduling system and design an alternate solution 
                            that could help mitigate food waste. 
                        </p>
                        <p>
                            Side note: The project was also started to brush up on the UX process
                        </p>
                        
                        <h4>The Solution</h4>
                        <p>
                            A mobile application with more specific inputs to help relief users' 
                            cognitive load that allows integration with their mobile's native
                            calendar.
                        </p>

                        <h4>Tools Used</h4>
                        <p>Adobe XD</p>

                        <h4>Project Length</h4>
                        <p>2.5 months</p>
                        <h4>My Role</h4>
                        <p>
                            Lead UX Researcher and Designer
                        </p>
                        <p>
                        Guided team member through the UX research and design process
                        </p>
                        <img className='kallie-project' alt="overview of Kalli in January" src={kallietemp} width="100%"/>   
                    
                        </div>
                    {/* <div className="column2">  
                    </div> */}
                    </div>
                    {/* <h4>Scope and Constraints</h4>
                    <p>
                        While we tried to allow it to be used for other
                    </p> */}
                    {/* </div> */}
                    <h3> Discovery</h3>
                    <p> What was conducted</p>
                    <ul>
                        <li>User surveys in trading groups and plant communities</li>
                        <li>Heursitic </li>
                    </ul>
                    <hr/>
                    <h3> Define </h3>
                    <p> What was conducted</p>
                    <ul>
                        <li>User flows</li>
                        <li>Personas </li>
                        <li>Information Architecture</li>
                    </ul>
                    <hr/>
                    <h3> Design </h3>
                    {/* <Design/> */}
                    <hr/>
                    <h3>Develop</h3>
                    </Container>
			</div>
		);
	}
}
export default Kallie