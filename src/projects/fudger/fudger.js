import React from 'react'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import '../../css/projects.css'
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { HashLink as Link } from 'react-router-hash-link';

import Discover from './discover.js'
import Define from './define.js'
import Design from './design.js'
import Develop from './develop.js'
import Carousel from '../../components/carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import design from '../../pictures/fudger/design-process.png'
import diamond from '../../pictures/fudger/diamond-design.png'
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons"
  
class Fudger extends React.Component {
	render() {
		return (
			<div className="fudger" id="fudger">
                <Breadcrumb>
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>Füdger</Breadcrumb.Item>
                </Breadcrumb>
                <Container>
                    
                    <Link to="/fudger#fudger">
                        <FontAwesomeIcon className="back-up" icon={faArrowAltCircleUp}/>
                    </Link>
                    <h1>Füdger: A UX Research/Design Project</h1>
                    <br></br>
                    <h2>Project Snapshot</h2>
                    
                    <div className="row">
                        <div className="column"><h4>The Problem</h4>
                            <p>
                                Food waste is a global issue plaguing modern society by contributing to greenhouse gases.
                                It happens throughout the stages of food provisioning - including planning, shopping, cooking, dealing with leftovers, and cleaning up.
                                But it is a problem any individual can help mitigate.

                                While we have waste disposal systems in place, there must be a reason why we have so much waste
                                in the first place.
                            </p>
                            
                            <h4>Objective</h4>
                            <p>
                                To better understand and distinguish the different food provisioning stages to 
                                identify a cause and design a solution that could help mitigate food waste.
                            </p>
                            
                            <h4>The Solution</h4>
                            <p>
                                A digital experience that helps users streamline their grocery shopping 
                                experience by allowing them to track their food inventory, 
                                effectively mitigating the over-purchasing of food items.
                                Thus, reducing food waste.
                            </p>

                            <h4>Tools Used</h4>
                            <p>Axure RP</p>

                            <h4>Project Length</h4>
                            <p>3.5 months</p>
                        </div>
                        <div className="column2">  
                            <Carousel/>
                        </div>
                    </div>
                    <div className="row">

                    <h4>My Role</h4>
                    <p>This project was done with a team of 6 students from varying backgrounds. 
                        We all participated in every stage of the process. 
                        However, I was personally responsible for:
                        <ul>
                            <li> Conducting field-study research</li>
                            <li> Integrating and writing most of the information in the usability study report, 
                                specifically for the method, findings and implications section</li>
                            <li> Editing majority of the reports to ensure conformity, flow, and readability</li>
                            <li> Ensuring conformity in the prototype by checking alignments, fonts, and colours</li>
                        </ul>
                    </p>
                    
                    <h4>Scope and Constraints</h4>
                    <p>
                        Due to this project being done concurrently with class, there wasn’t much time 
                        to find a variety of users. So most of our participants were students, 
                        particularly STEM majors. It poses an issue due to them being more tech-savvy
                        and thus limiting our ability to uncover accessibility issues.
                    </p>
                    <p>
                        Since we had limited time to explore Axure, we also ran into a couple bugs that 
                        affected user flow and had a few functions hard-wired into the prototype. At certain
                        times, there were server issues that caused the pages to 
                        load improperly or very slowly. This resulted in some user confusion.
                    </p>
                    </div>
                    <hr/>

                    <h2>Design Process</h2>
                
                    {/* <div display="block" text-align="center"> */}
                        <img className='design-process' alt='double diamond process' src={diamond} width="60%"/>
                    {/* </div> */}
                    <p> We used the <strong> Double Diamond </strong> design process on this project. 
                        This design process consists of diverging and converging ideas to get 
                        to a solution at four stages: discover, define, develop, and deliver. 
                        Below are the methods we used at each stage.</p>

                        <img className='design-process' alt='In-depth four stage double diamon process' src={design} width="90%"/>
                       
                     {/* <ControlledTabs /> */}
                   
                
                <h3> Discovery</h3>
                <Discover/>
               
                <h3> Define </h3>
                <Define/>
           
                <h3> Design </h3>
                <Design/>
             
                <h3>Develop</h3>
                <Develop/> 
                

                </Container>
			</div>
		);
	}
}

// function ControlledTabs() {
//     const [key, setKey] = useState('discover');
  
//     return (
//       <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
//         <Tab eventKey="discover" title="Discover">
//             <Discover/>
//         </Tab>
//         <Tab eventKey="define" title="Define">
//             <Define/>
//         </Tab>
//         <Tab eventKey="design" title="Design">
//             <Design/>
//         </Tab>
//         <Tab eventKey="develop" title="Develop">
//             <Develop/>
//         </Tab>
//       </Tabs>
//     );
//   }
  
 
export default Fudger