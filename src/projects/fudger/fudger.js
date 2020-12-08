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

                    {/* <h2>Project Snapshot</h2> */}
                    <div className="snapshot">
                    <div className="row">
                        <div className="column"><h4>The Problem</h4>
                            <p>How can we help solve food waste problem at a consumer level?</p>
                            <p>
                            While we have waste disposal systems in place, there must be 
                            a reason why we have so much waste in the first place.
                            </p>

                            
                            <h4>The Solution</h4>
                            <p>
                                A digital experience that helps users streamline their grocery 
                                shopping experience by allowing them to track their food inventory 
                                and grocery list.
                            </p>
                            <p>This effectively mitigating the over-purchasing of food items.
                                Thus, reducing food waste.</p>
                            
                            <h4>My Role</h4> 
                            <p>UX research, Prototyping, Usability testing, QA/Editor</p>   
                        </div>
                        <div className="column2">  
                        <h4>Tools Used</h4>
                            <p>Axure RP</p>

                            <h4>Project Length</h4>
                            <p>3.5 months</p>
                            
                            <h4>The Team</h4>
                            <p>John Oabel</p>
                            <p>Kyle Osborne</p>
                            <p>Michael Le</p>
                            <p>Pratyush Kanwar</p>
                            <p>Yufeng Zhou</p>
                           
                        </div>
                        </div>
                    </div>
                    <Carousel/>
                    <div className="row">

                    
                    
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
                    <strong>Applied Skills</strong>
                            <p>
                            design thinking, ux research, 
                            user interviews, user journey mapping, user stories, 
                            task flow, wireframing, prototyping, 
                            usability testing, proofreading, editing
                            </p>
                    </div>
                    <hr/>
                   
                
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